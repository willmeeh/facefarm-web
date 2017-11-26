import { fetchApi } from 'services/api';

const endPoints = {
	getWeather: '/weather',
};

export const getWeather = (endereco = {endereco: 'Santa cruz so sul'}) => {
	return fetchApi(endPoints.getWeather, endereco, 'post', { "Content-Type": "application/json" });
};