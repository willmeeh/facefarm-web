import { fetchApi } from 'services/api';

const endPoint = {agricultor: '/agricultor'};

export const create = (payload) => {
    return fetchApi(endPoint.agricultor, payload, 'post', {"Content-Type": "application/json"});
}