import { fetchApi } from 'services/api';

const endPoints = {
	remove: '/postagem',
};

export const remove = (id) => {
	return fetchApi(`${endPoints.remove}/${id}`, null, 'delete', { "Content-Type": "application/json" });
};

