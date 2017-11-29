import { fetchApi } from 'services/api';
import * as sessionSelectors from 'services/session/selectors';

const endPoints = {
	seguirUsuario: '/users/me/follow',
	deixarDeSeguirUsuario: '/users/me/unfollow',
	getListFollowing: '/users/me/getListFollowing',
	getListFollowers: '/users/me/getListFollowers'
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

export const getListFollowing = (userId = '') => {
	return fetchApi(`${endPoints.getListFollowing}${userId !== '' ? `/${userId}` : ''}`,
		userId !== '' ? { id: userId } : null,
		'post',
		{ "Content-Type": "application/json" }
	);
};

export const popularListFollowers = (userId = '') => {
	return fetchApi(`${endPoints.getListFollowers}${userId !== '' ? `/${userId}` : ''}`,
		userId !== '' ? { id: userId } : null,
		'post',
		{ "Content-Type": "application/json" }
	);
};
