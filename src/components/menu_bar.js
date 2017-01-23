import React from 'react';
import { Link } from 'react-router';

export default function MenuBar(props) {
	return (
		<nav className="navbar navbar-default menu-bar">
		  <div className="container-fluid">
		  	<div className="collapse navbar-collapse">
			    <ul className="nav navbar">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/search">Search</Link></li>
				</ul>
			</div>
		  </div>
		</nav>
		
	);
}