import React from 'react';

import SearchBar from '../containers/search_bar';
import QuestionsList from '../containers/questions_list';

export default function Search(props) {
	return (
		<div>
			<SearchBar />
			<QuestionsList />
		</div>
	);
}