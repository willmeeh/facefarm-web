import { fetchApi } from 'services/api';

const endPoints = {
	criar: '/comentario',
};

export const create = (comentario) => {
	return fetchApi(endPoints.criar, comentario, 'post', { "Content-Type": "application/json" });
};
