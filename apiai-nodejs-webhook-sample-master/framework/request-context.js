// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class RequestContext {
    constructor(baseUri) {
        this.headers = {};
        this.additionalHeaders = {};
        this.finalHeaders = {};
        this.currentInstace = axios.create({
            baseURL: baseUri,
            timeout: 50000,
        });
    }
    addHeader(headers) {
        for (var col in headers)
            this.headers[col] = headers[col];
    }
    get(uri, headers) {
        var finalHeaders = this.getFinalHeaders(headers);
        return axios({
            method: 'get',
            url: uri,
            headers: finalHeaders
        });
        //return this.currentInstace.get(uri);
    }
    getFinalHeaders(headers) {
        var finalHeaders = {};
        if (headers)
            for (var col in headers)
                finalHeaders[col] = headers[col];
        for (var col in this.headers)
            finalHeaders[col] = this.headers[col];
        return finalHeaders;
    }
    post(uri, data, headers) {
        var finalHeaders = this.getFinalHeaders(headers);
        return axios({
            method: 'post',
            url: uri,
            data: data,
            headers: finalHeaders
        });
        //return this.currentInstace.post(uri, data);
    }
    put(uri, data, headers) {
        var finalHeaders = this.getFinalHeaders(headers);
        return axios({
            method: 'put',
            url: uri,
            data: data,
            headers: finalHeaders
        });
        //return this.currentInstace.put(uri, data);
    }
    patch(uri, data, headers) {
        var finalHeaders = this.getFinalHeaders(headers);
        return axios({
            method: 'patch',
            url: uri,
            data: data,
            headers: finalHeaders
        });
        //return this.currentInstace.patch(uri, data);
    }
    delete(uri, headers) {
        var finalHeaders = this.getFinalHeaders(headers);
        return axios({
            method: 'delete',
            url: uri,
            headers: finalHeaders
        });
    }
}
exports.RequestContext = RequestContext;