import { fetchApi } from '../api';

const endPoints = {
	authUser: '/auth/users',
	getListFollowing: '/users/me/getListFollowing',
	getListFollowers: '/users/me/getListFollowers'
};

export const authenticate = (credentials) => {
	return fetchApi(endPoints.authUser, credentials, 'post', { "Content-Type": "application/json" });
};

export const getListFollowing = (userId = '') => {
	return fetchApi(`${endPoints.getListFollowing}${userId !== '' ? `/${userId}` : ''}`,
		userId !== '' ? {id: userId} : null,
		'post',
		{ "Content-Type": "application/json" }
	);
};

export const popularListFollowers = (userId = '') => {
	return fetchApi(`${endPoints.getListFollowers}${userId !== '' ? `/${userId}` : ''}`,
		userId !== '' ? {id: userId} : null,
		'post',
		{ "Content-Type": "application/json" }
	);
};


