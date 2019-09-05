import { GridRequest } from 'tubular-common';
import { ITubularHttpClient, ShallowHttpClient } from 'tubular-react';

interface IInitRequest {
    method: string;
    headers: Headers;
    body: any;
}

function getHeaders(url: string): Headers {
    const headers = new Headers();

    switch (url) {
        default:
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            // headers.append('Authorization', `Bearer ${accessToken}`);
            break;
    }

    return headers;
}

function getRequest(url: string, requestMethod: string, requestBody?: any): Request {
    const init: IInitRequest = {
        body: requestBody ? requestBody : null,
        headers: getHeaders(url),
        method: requestMethod,
    };

    return new Request(url, init);
}

const fetchRequest = async (
    url: string,
    requestMethod: string,
    requestBody?: any) => {
    const request = getRequest(url, requestMethod, requestBody);
    const response = await fetch(request);

    switch (response.status) {
        case 200:
        case 204:
        case 206:
            const responseBody = await response.text() as any;
            const responseJson = responseBody ? JSON.parse(responseBody) : {};
            return responseJson;
        default:
                throw new Error('Something went wrong');
    }
};

export const getTubularClient = (baseUrl: string): ITubularHttpClient =>
    new ShallowHttpClient(
        baseUrl,
        (url: string, request: GridRequest) =>
            fetchRequest(url, 'POST', JSON.stringify(request)),
    );

export default fetchRequest;
