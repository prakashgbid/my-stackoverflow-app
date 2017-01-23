import { expect } from '../test_helper';
import QuestionsReducer from '../../src/reducers/reducer_questions';
import { GET_QUESTIONS} from '../../src/actions/types';

describe('Questions Reducer', () => {

	it('handles action of type GET_QUESTIONS', () => {
		expect(GET_QUESTIONS).to.eql('get_questions');
	});
});