import { fetchApi } from 'services/api';

const endPoints = {
  ferramentasAgricolas: '/ferramentasAgricolas',
  getList: '/ferramentasAgricolas/0/100'
};

export const create = (ferramenta) => {
	return fetchApi(endPoints.ferramentasAgricolas, ferramenta, 'post', { "Content-Type": "application/json" });
};

export const getFerramentas = (user) => {
	return fetchApi(endPoints.getList, user, 'post', { "Content-Type": "application/json" });
};