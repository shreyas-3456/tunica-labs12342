import React from 'react';
import { arrowLeft, bell, magGlass } from '../assets';

const Navbar = () => {
	return (
		<nav className="nav-container">
			<div className="arrowLeft-container">
				<img src={arrowLeft} alt="" />
			</div>
			<div className="input-container">
				<input type="text" className="nav-input" placeholder="Search..." />
				<img src={magGlass} className="glass" alt="" />
			</div>
			<div className="bell-container">
				<img src={bell} alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
