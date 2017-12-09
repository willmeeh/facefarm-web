import { fetchApi } from 'services/api';

const endPoints = {
	remove: '/postagem',
	update: '/postagem',
};

export const remove = (id) => {
	return fetchApi(`${endPoints.remove}/${id}`, null, 'delete', { "Content-Type": "application/json" });
};

export const update = (update) => {
	return fetchApi(endPoints.update, update, 'post', { "Content-Type": "application/json" });
};

