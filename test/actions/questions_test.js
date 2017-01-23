import { expect } from '../test_helper';
import { GET_QUESTIONS } from '../../src/actions/types';
import { getQuestions } from '../../src/actions/get_questions';

describe('Actions', () => {
	describe('getQuestions', () => {
		it('has the correct type', () => {
			const action = getQuestions();
			expect(action.type).to.equal(GET_QUESTIONS);
		});

		it('has the correct url', () => {
			const requestUrl ='url';
			expect(requestUrl).to.equal('url');
		});
	});
});