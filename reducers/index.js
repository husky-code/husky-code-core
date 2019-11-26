import { combineReducers } from 'redux';
import { SET_TOKEN } from '../actions';

const initialState = {
	token: null
};

function tokenReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				//...state,
				token: action.token
			};
		}
		default: {
			return state;
		}
	}
}

const reducers = combineReducers({
	tokenReducer
});

export default reducers;