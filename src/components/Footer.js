import React from 'react';
import { NavLink } from 'react-router-dom';
//do I need to import About and Contact Pages?

export default function Footer() {
	return (
		<div className="container">
			<div className="fixed-bottom Footer">
				<NavLink
					key="About"
					to="/about"
					className="nav-link"
					exact
					activeClassName="activeLink"
				>
					About
				</NavLink>{' '}
				<NavLink
					key="Contact"
					to="/contact"
					className="nav-link"
					exact
					activeClassName="activeLink"
				>
					Contact
				</NavLink>
			</div>
		</div>
	);
}
