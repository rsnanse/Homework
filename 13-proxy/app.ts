enum MethodType {
  Post = 'POST',
  Get = 'GET',
}

interface IOptional {
  method: MethodType;
  headers: Record<string, string>;
  body?: any;
}

interface IReq {
  url: string;
  options: IOptional;
  exec<T>(id: number): Promise<T>;
}

class requestClass implements IReq {
  url: string = '';
  options: IOptional = {
    method: MethodType.Get,
    headers: { 'Content-Type': 'application/json' },
  };
  async exec<T>(id: number): Promise<T> {
    if (!this.url) {
      throw new Error('Не введен URL');
    }
    const res = await fetch(this.url + id, {
      method: this.options.method,
      headers: this.options.headers,
      body: this.options.body ? JSON.stringify(this.options.body) : null,
    });
    return (await res.json()) as T;
  }
}

class requestClassBuilder extends requestClass {
  private request = new requestClass();

  setUrl(url: string): this {
    this.request.url = url;
    return this;
  }

  setMethod(method: MethodType): this {
    this.request.options.method = method;
    return this;
  }

  setHeaders(data: Record<string, string>): this {
    this.request.options.headers = data;
    return this;
  }

  setBody(info: any): this {
    this.request.options.body = info;
    return this;
  }

  build(): requestClass {
    return this.request;
  }
}

class SecurityProxy implements IReq {
  url: string = '';
  options: IOptional = {
    method: MethodType.Get,
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private security: IReq) {}

  async exec<T>(id: number): Promise<T> {
    if (id < 10) {
      throw new Error(`Недопустимый id: ${id}`);
    }
    return this.security.exec(id);
  }
}

const builder = new requestClassBuilder();
const request = builder.setUrl('https://dummyjson.com/products/').setMethod(MethodType.Get).build();

const protectedReq = new SecurityProxy(request);
const data = await protectedReq.exec(3);
console.log(data);
