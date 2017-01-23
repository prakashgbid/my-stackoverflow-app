import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AdvancedSearchFilter from '../components/advance_search_filter';
import { getQuestions } from '../actions/get_questions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event)	{
		this.setState({
			term: event.target.value
		});
		//this.props.getQuestions(this.state.term);
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.getQuestions(this.state.term);
		//this.setState({term:''});
	}

	render(){
		return(	
			<div>
				<form 
					onSubmit={ this.onFormSubmit } 
					className="input-group mg-30">
						<input 
							type="text" 
							placeholder="type a question"
							className="form-control search-bar"
							value={ this.state.term }
							onChange={ this.onInputChange }
						/>
						<span className="input-group-btn">
							<button 
								type="submit" 
								className="btn btn-primary">
								Ask
							</button>
						</span>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getQuestions }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);