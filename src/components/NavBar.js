import React from 'react';
import { Link } from 'react-router-dom';
//do I need to import SignUp and Login?
//SignUp will be the register/make a user
//Login will be authorize the user and show them their page

const NavBar = props => {
	return (
		<nav className="NavBar fixed-top">
			<Link key="SignUp" to="/signup" className="nav-link nav-item">
				Sign Up
			</Link>{' '}
			<Link key="Login" to="/login" className="nav-link nav-item">
				Login
			</Link>
		</nav>
	);
};

export default NavBar;
