import pt_codes from 'pt_codes';

export default (state = {currentMessage: undefined}, action) => {
    switch (action.type) {

        case 'ADD_MESSAGE':
            return {
                ...state,
                currentMessage: pt_codes[action.cod]
            };

        case 'REMOVE_MESSAGE':
            return {
                ...state,
                currentMessage: undefined
            };

        default:
            return state;
    }
};