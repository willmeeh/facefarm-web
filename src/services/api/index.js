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

// export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {

//     const accessToken = sessionSelectors.get().tokens;

//     return fetch(`${apiConfig.url}${endPoint}`, {
//         method: method.toLowerCase(),
//         headers: _.pickBy({
// 			...(accessToken && {"x-auth": `${accessToken}`}),
// 			...headers,
// 		}, item => !_.isEmpty(item)),
//         body: (payload)
//     });
// }
