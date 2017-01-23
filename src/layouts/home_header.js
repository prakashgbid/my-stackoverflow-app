import React from 'react';

import Banner from '../components/banner';
import MenuBar from '../components/menu_bar';

export default function Header(props){
	return(
		<div>
			<Banner />
			<MenuBar />
		</div>
	);
}