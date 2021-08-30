import React from 'react';
import { NavLink } from 'react-router-dom';
// import {  } from 'react-router';
//do I need to import SignUp and Login?
//SignUp will be the register/make a user
//Login will be authorize the user and show them their page

const NavBar = props => {
	return (
		<div className="container">
			<nav className="NavBar-default fixed-top navbar-expand-md navbar nav">
				<button
					className="navbar-toggle"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#toggleMobileMenu"
					aria-controls="toggleMobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon toggle"></span>
				</button>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<NavLink
						key="SignUp"
						to="/signup"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Register
					</NavLink>{' '}
					<NavLink
						key="Login"
						to="/login"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Login
					</NavLink>
					<NavLink
						key="Home"
						to="/"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Home
					</NavLink>
					<NavLink
						key="HowItWorks"
						to="/howitworks"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						How It Works
					</NavLink>
					<NavLink
						key="Search"
						to="/search"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Search for a Registry
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
