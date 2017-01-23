import { GET_QUESTIONS } from '../actions/types';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {

	switch(action.type) {
		case GET_QUESTIONS: 
			return [action.payload.data.items];
	}

	return state;
}