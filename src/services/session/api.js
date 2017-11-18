import { fetchApi } from '../api';

const endPoints = {
	authUser: '/auth/users',
};

export const authenticate = (credentials) => {
	return fetchApi(endPoints.authUser, credentials, 'post', { "Content-Type": "application/json" })
	.then((response) => {
		return response;
	})
	.catch((error) => {
		console.log('error', error)
	});
};

// export const authenticate = (credentials) => {
// 	return fetch('http://localhost:4000/auth/users', {
// 		method: "POST",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify(credentials)

// 	}).then((response) => {
// 		return response.json();
// 	});
// }

