import { fetchApi } from 'services/api';

const endPoints = {
	searchUserByName: '/users',
};

export const searchUserByName = (params) => {
	return fetchApi(
		`${endPoints.searchUserByName}${params}`, 
		null, 
		'get', 
		{ "Content-Type": "application/json" }
	);
};

