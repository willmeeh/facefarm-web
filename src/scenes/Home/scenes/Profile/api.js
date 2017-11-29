import { fetchApi } from 'services/api';
import * as sessionSelectors from 'services/session/selectors';

const endPoints = {
	getUserById: '/users',
	ggetProfileImage: '/users/getProfileImage'
};

export const getUserById = (params) => {
	return fetchApi(
		`${endPoints.getUserById}${params}`,
		null,
		'get',
		{ "Content-Type": "application/json" }
	);
};

