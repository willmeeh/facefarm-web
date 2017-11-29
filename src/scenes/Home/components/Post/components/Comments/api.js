import { fetchApi } from 'services/api';

const endPoints = {
	remove: '/comentario',
};

export const create = (comentario) => {
	return fetchApi(endPoints.remove, comentario, 'post', { "Content-Type": "application/json" });
};
