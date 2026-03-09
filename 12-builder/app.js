"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReqType;
(function (ReqType) {
    ReqType["Get"] = "GET";
    ReqType["Post"] = "POST";
    ReqType["Put"] = "PUT";
    ReqType["Delete"] = "DELETE";
})(ReqType || (ReqType = {}));
class Request {
    url = '';
    options = {
        method: ReqType.Get,
        headers: { 'Content-Type': 'application/json' },
    };
    async req() {
        if (!this.url) {
            throw new Error('Не указан URL');
        }
        const response = await fetch(this.url, {
            method: this.options.method,
            headers: this.options.headers,
            body: this.options.body ? JSON.stringify(this.options.body) : null,
        });
        return response.json();
    }
}
class RequestBuilder {
    request = new Request();
    setUrl(url) {
        this.request.url = url;
        return this;
    }
    setMethod(method) {
        this.request.options.method = method;
        return this;
    }
    setHeaders(headers) {
        this.request.options.headers = headers;
        return this;
    }
    setBody(data) {
        this.request.options.body = data;
        return this;
    }
    build() {
        return this.request;
    }
}
const req = new RequestBuilder();
req.setUrl('a@a.ru').setMethod(ReqType.Get).build();
//# sourceMappingURL=app.js.map