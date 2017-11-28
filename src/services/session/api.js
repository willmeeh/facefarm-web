import { fetchApi } from '../api';

const endPoints = {
	authUser: '/auth/users'
};

export const authenticate = (credentials) => {
	return fetchApi(endPoints.authUser, credentials, 'post', { "Content-Type": "application/json" });
};




