import { combineReducers } from 'redux';

// function user(state, action) {
// 	switch (action.type) {
// 		case 'register': {
// 		
// 		}
// 		default: {
// 			return state;
// 		}
// 	}
// }
// 
// function users(state = [], action) {
// 	return null;
// }

const initialState = {
	token: null
};

function authReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_TOKEN': {
			return {
				...state,
				token: action.token
			};
		}
		default: {
			return state;
		}
	}
}

const reducers = combineReducers({
	authReducer
});

export default reducers;