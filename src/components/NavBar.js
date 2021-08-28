import React from 'react';
import { Link } from 'react-router-dom';
//do I need to import SignUp and Login?
//SignUp will be the register/make a user
//Login will be authorize the user and show them their page

const NavBar = props => {
	return (
		<div className="container">
			<nav className="NavBar fixed-top navbar-expand-md navbar">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#toggleMobileMenu"
					aria-controls="toggleMobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<Link key="SignUp" to="/signup" className="nav-link nav-item">
						Register
					</Link>{' '}
					<Link key="Login" to="/login" className="nav-link nav-item">
						Login
					</Link>
					<Link key="Home" to="/" className="nav-link nav-item">
						Home
					</Link>
					<Link key="HowItWorks" to="/howitworks" className="nav-link nav-item">
						How It Works
					</Link>
					<Link key="Search" to="/search" className="nav-link nav-item">
						Search for a Registry
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
