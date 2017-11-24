// import configureStore from '../configureStore';

export const get = () => {
    return store.getState().session
};

export const getLoggedUser = () => {
    return store.getState().session.user
};

export const getLoggedUserId = () => {
    return store.getState().session.user._id
};