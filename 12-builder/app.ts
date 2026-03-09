enum ReqType {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

interface IReqOptions {
  method: ReqType;
  headers: Record<string, string>;
  body?: any;
}

class Request {
  url: string = '';
  options: IReqOptions = {
    method: ReqType.Get,
    headers: { 'Content-Type': 'application/json' },
  };
  async req<T>(): Promise<T> {
    if (!this.url) {
      throw new Error('Не указан URL');
    }

    const response = await fetch(this.url, {
      method: this.options.method,
      headers: this.options.headers,
      body: this.options.body ? JSON.stringify(this.options.body) : null,
    });
    return response.json() as Promise<T>;
  }
}

class RequestBuilder {
  private request = new Request();

  setUrl(url: string): this {
    this.request.url = url;
    return this;
  }

  setMethod(method: ReqType): this {
    this.request.options.method = method;
    return this;
  }

  setHeaders(headers: Record<string, string>): this {
    this.request.options.headers = headers;
    return this;
  }

  setBody(data: any): this {
    this.request.options.body = data;
    return this;
  }

  build(): Request {
    return this.request;
  }
}

const req = new RequestBuilder();
req.setUrl('a@a.ru').setMethod(ReqType.Get).build();
