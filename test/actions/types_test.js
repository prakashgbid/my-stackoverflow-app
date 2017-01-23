import { expect } from '../test_helper';
import { GET_QUESTIONS } from '../../src/actions/types';

describe('Actions', () => {
	describe('Types', () => {
		it('has a type for getting questions', () => {
			expect(GET_QUESTIONS).to.equal("get_questions");
		});
	});
});