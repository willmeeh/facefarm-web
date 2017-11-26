import { fetchApi } from 'services/api';

const endPoints = {
	getUserById: '/users',
};

export const getUserById = (params) => {
	return fetchApi(
		`${endPoints.getUserById}${params}`, 
		null, 
		'get', 
		{ "Content-Type": "application/json" }
	);
};

