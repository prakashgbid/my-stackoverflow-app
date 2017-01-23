import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionDetailsRow from '../components/question_details_row';

class QuestionsList extends Component {
	render() {
		var q = (this.props.questions.length > 0 ? 
					this.props.questions[0] : 
					this.props.questions);
		return (
			<div>
		     	{ q.map((question) => 
		     		<QuestionDetailsRow 
		     			question={question} 
		     			key={question.question_id} />)}
			</div>
		);
	}
}

function mapStateToProps({ questions }) {          
	return { questions };                           
}

export default connect(mapStateToProps)(QuestionsList);