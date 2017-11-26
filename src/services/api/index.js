/* global fetch */

import apiConfig from './config';
import * as sessionSelectors from '../session/selectors';

export const handleErrors = (response) => {

    return new Promise((resolve, reject) => {
        if (response.ok && response.status === 200) {
            response.json().then((response) => {
                console.log(response, response.cod)
                if (response && response.cod) {
                    store.dispatch({ type: 'ADD_MESSAGE', cod: response.cod })
                }
                resolve(response);
            }).catch((e) => {
                store.dispatch({ type: 'ADD_MESSAGE', cod: 'ERROR_DEFAULT' })
                reject(e);
            })
        } else {
            response.json().then((response) => {
                store.dispatch({ type: 'ADD_MESSAGE', cod: response.cod })
                reject(response);
            }).catch((e) => {
                reject(e);
            })
        }
    })
}

export const fetchApi = (endPoint, payload = {}, method = 'get', pHeaders = {}) => {

    let headers = new Headers(pHeaders);

    const accessToken = sessionSelectors.get().token;

    if (accessToken) {
        headers.append("x-auth", accessToken);
    }

    let params = {
        method: method.toLowerCase(),
        headers: headers,
    };

    if (payload)
        params.body = JSON.stringify(payload)

    const request = new Request(`${apiConfig.url}${endPoint}`, params);

    return fetch(request).then(handleErrors);
}