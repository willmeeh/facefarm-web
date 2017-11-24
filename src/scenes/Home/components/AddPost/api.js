import { fetchApi } from 'services/api';

const endPoints = {
	create: '/postagem',
};

export const create = (payload) => {
	return fetchApi(endPoints.create, payload, 'post', { "Content-Type": "application/json" });
};

