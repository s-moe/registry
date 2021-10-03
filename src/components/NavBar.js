import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { context } from './context';
import { useHistory } from 'react-router-dom';

const NavBar = props => {
	const { setToken, token, loggedInUser } = useContext(context);

	let history = useHistory();

	const logout = () => {
		localStorage.clear();
		setToken('');
		history.push('/');
	};

	return (
		<div className="ContainerShowSidebar">
			<nav className="NavBar-default fixed-top navbar-expand-md navbar nav">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#toggleMobileMenu"
					aria-controls="toggleMobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<HiMenu className="hamburger" size="40px" color="black" />
				</button>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
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
					<div>
						{token ? (
							<>
								<p>{loggedInUser}</p>
								<button onClick={logout}>Log out</button>
							</>
						) : (
							<>
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
							</>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
