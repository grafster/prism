import { IHttpOperation } from "@stoplight/types";

// we need an interface we can implement with a little fuss that will be compatible
// with node and browsers.
// We can either come up with our own interface or inherit from existing interfaces (node http request, express http request)
// Refs: 
// - https://expressjs.com/en/api.html
// - https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html 

export interface IHttpRequest {
    // parameters from the query string
    query: { [key:string]: string };
    headers: { [key: string]: string };
}

export interface IHttpOperationOptions {
    readonly contentType?: string;
    readonly statusCode?: string;
    readonly example?: string;
    readonly headers?: boolean;
    readonly dynamic?: boolean;
}

export interface IHttpRequestValidator {
    isValid(httpOperation: IHttpOperation, httpRequest: IHttpRequest): boolean;
}