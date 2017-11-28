import { fetchApi } from 'services/api';

const endPoints = {
    seguirUsuario: '/users/me/follow',
    deixarDeSeguirUsuario: '/users/me/unfollow',
};

export const seguirUsuario = (params) => {
	return fetchApi(
		endPoints.seguirUsuario, 
		params, 
		'POST', 
		{ "Content-Type": "application/json" }
	);
};

export const deixarDeSeguirUsuario = (params) => {
	return fetchApi(
		endPoints.deixarDeSeguirUsuario, 
		params, 
		'POST', 
		{ "Content-Type": "application/json" }
	);
};


