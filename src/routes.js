import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './layouts/home';
import Search from './layouts/home_search';
import Home from './components/home';

export default (
	<Route path="/" component={Index}>
		<IndexRoute component={Home} />
		<Route path="/home" component={ Home } />
		<Route path="/search" component={ Search } />
	</Route>
);