import { fetchApi } from 'services/api';

const endPoints = {
	searchUsersByName: '/users',
};

export const searchUsersByName = (params) => {
	return fetchApi(
		`${endPoints.searchUsersByName}${params}`, 
		null, 
		'get', 
		{ "Content-Type": "application/json" }
	);
};

