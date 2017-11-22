import pt_codes from 'pt_codes';
import pt_codes_client from 'pt_codes_client';

export default (state = { currentMessage: undefined }, action) => {
	switch (action.type) {

		case 'ADD_MESSAGE':
			let msg = pt_codes[action.cod];
			if (!msg) {
				msg = pt_codes_client[action.cod];
				if (!msg) {
					msg = pt_codes_client['ERROR_DEFAULT'];
				}
			}
			return {
				...state,
				currentMessage: msg
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