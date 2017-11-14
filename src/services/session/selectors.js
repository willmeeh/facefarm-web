import configureStore from '../configureStore';

const store = configureStore();

export const get = () => {
    return store.getState().session
};