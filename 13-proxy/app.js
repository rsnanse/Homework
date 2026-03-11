var MethodType;
(function (MethodType) {
    MethodType["Post"] = "POST";
    MethodType["Get"] = "GET";
})(MethodType || (MethodType = {}));
class requestClass {
    url = '';
    options = {
        method: MethodType.Get,
        headers: { 'Content-Type': 'application/json' },
    };
    async exec(id) {
        if (!this.url) {
            throw new Error('Не введен URL');
        }
        const res = await fetch(this.url + id, {
            method: this.options.method,
            headers: this.options.headers,
            body: this.options.body ? JSON.stringify(this.options.body) : null,
        });
        return (await res.json());
    }
}
class requestClassBuilder extends requestClass {
    request = new requestClass();
    setUrl(url) {
        this.request.url = url;
        return this;
    }
    setMethod(method) {
        this.request.options.method = method;
        return this;
    }
    setHeaders(data) {
        this.request.options.headers = data;
        return this;
    }
    setBody(info) {
        this.request.options.body = info;
        return this;
    }
    build() {
        return this.request;
    }
}
class SecurityProxy {
    security;
    url = '';
    options = {
        method: MethodType.Get,
        headers: { 'Content-Type': 'application/json' },
    };
    constructor(security) {
        this.security = security;
    }
    async exec(id) {
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
export {};
//# sourceMappingURL=app.js.map