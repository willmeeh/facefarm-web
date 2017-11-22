/* global fetch */

import apiConfig from './config';
import * as sessionSelectors from '../session/selectors';

export const handleErrors = (response) => {
    if (!response.ok || response.status !== 200) {
        response.json().then((response) => {
            if (response && response.cod) {
                store.dispatch({ type: 'ADD_MESSAGE', cod: response.cod })
            } else {
                store.dispatch({ type: 'ADD_MESSAGE', cod: 'ERROR_DEFAULT' })
            }
        }).catch(() => {
            store.dispatch({ type: 'ADD_MESSAGE', cod: 'ERROR_DEFAULT' })
        })
        throw new Error(response.statusText);
    } else {
        return response;
    }
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

    return fetch(request)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}