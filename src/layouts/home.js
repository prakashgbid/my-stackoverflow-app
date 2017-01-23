import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './home_header';

export default class Home extends Component {
	render() {
		return(
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}