import { fetchApi } from 'services/api';

const endPoints = {
	getPosts: '/postagem/getListByUsers',
};

export const getPosts = (base = {base: 'BRL'}) => {
	return fetchApi(endPoints.getPosts, base, 'post', { "Content-Type": "application/json" });
};

    