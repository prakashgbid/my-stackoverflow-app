import React from 'react';

export default function QuestionDetailsRow(props) {
	const q = props.question;
	console.log(props);
	const convertDate = (dt) => {
		let utcSeconds = dt;
		let d = new Date(0); 
		d.setUTCSeconds(utcSeconds);
		return d.toLocaleDateString();
	}
	const tags = (q.tags).reduce((accStr, currStr) => {
		return accStr + ', ' + currStr;
	});
	const className = 'question-details-row alert ' +
			((q.accepted_answer_id) ?
				'alert-success' : 
				'alert-danger');
	return (
		<div className={className} >
			<div clasName="row">
				<h4><a 
						href={q.link} 
						className="alert-link" 
						target="_blank">
							<em>{q.title}</em>
					</a>
				</h4>
			</div>
			<div clasName="row">
				<ul className="list-inline">
					<li clasName="list-inline-item">
						<kbd>Score:{q.score}</kbd>
					</li>
					<li clasName="list-inline-item">
						<kbd>Answers:{q.answer_count}</kbd>
					</li>
					<li clasName="list-inline-item">
						<kbd>Views:&nbsp;{q.view_count}</kbd>
					</li>
					<li clasName="list-inline-item">
						<kbd>Tags:&nbsp;{tags}</kbd>
					</li>
					<li clasName="list-inline-item">
						<kbd>Created:{convertDate(q.creation_date)}</kbd>
					</li>
					<li clasName="list-inline-item">
						<kbd>Last&nbsp;Activity:{convertDate(q.last_activity_date)}</kbd>
					</li>
				</ul>
			</div>
     	</div>
	); 
}