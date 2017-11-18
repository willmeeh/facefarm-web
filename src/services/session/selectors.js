import configureStore from '../configureStore';

export const get = () => {
    return store.getState().session
};