import { combineReducers } from 'redux';

function user(state, action) {
	switch (action.type) {
		case 'register': {
		
		}
		default: {
			return state;
		}
	}
}

function users(state = [], action) {
	return null;
}

const reducers = combineReducers({
	users
});

export default reducers;