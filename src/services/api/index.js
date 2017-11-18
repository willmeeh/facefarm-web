/* global fetch */

import _ from 'lodash';

import apiConfig from './config';
import * as sessionSelectors from '../session/selectors';

// export const exceptionExtractError = (exception) => {
// 	if (!exception.Errors) return false;
// 	let error = false;
// 	const errorKeys = Object.keys(exception.Errors);
// 	if (errorKeys.length > 0) {
// 		error = exception.Errors[errorKeys[0]][0].message;
// 	}
// 	return error;
// };

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

    console.log('request', request)

    return fetch(request)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            return error;
        });


    // return fetch(`${apiConfig.url}${endPoint}`, {
    //     method: method.toLowerCase(),
    //     headers: JSON.stringify({
    // 		...(accessToken && {"x-auth": `${accessToken}`}),
    // 		...headers,
    // 	}),
    //     body: JSON.stringify(payload)
    // }).then((response) => {
    // 	return response.json();
    // })
    // .catch((error) => {
    // 	return error;
    // });
}