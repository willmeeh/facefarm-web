import { fetchApi } from '../api';
import apiConfig from '../api/config';

const endPoints = {
	authUser: '/auth/users',
};

//Exemplo de como deveria ser:
// export const authenticate = (email, password) => fetchApi(endPoints.authenticate, {}, 'post', {
// 	Authorization: `Basic ${new Buffer(`${email}:${password}`).toString('base64')}`,
// });

export const authenticate = (credentials) => {
	return fetch('http://localhost:4000/auth/users', {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(credentials)

	}).then((response) => {
		return response.json();
	});
}

