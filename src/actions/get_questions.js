import axios from 'axios';

import { GET_QUESTIONS } from './types';

const SEARCH_URL = "http://api.stackexchange.com/2.2/search/advanced?fromdate=1464739200&todate=1484870400&order=desc&sort=votes&site=stackoverflow&q=";

export function getQuestions (searchKey) {
	const url = `${SEARCH_URL}${searchKey}`;
	const request = axios.get(url);

	return {
		type: GET_QUESTIONS,
		payload: request
	}
}