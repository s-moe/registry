import React from 'react';
import { Link } from 'react-router-dom';
//do I need to import SignUp and Login?
//SignUp will be the register/make a user
//Login will be authorize the user and show them their page

const NavBar = props => {
	return (
		<nav className="NavBar fixed-top nav-bar-toggler">
			<Link key="SignUp" to="/signup" className="nav-link nav-item">
				Register
			</Link>{' '}
			<Link key="Login" to="/login" className="nav-link nav-item">
				Login
			</Link>
			<Link key="Home" to="/" className="nav-link nav-item">
				Home
			</Link>
			<Link className="nav-link nav-item">Search for a Registry</Link>
		</nav>
	);
};

export default NavBar;
