import React from 'react';
import { Link } from 'react-router-dom';
//do I need to import About and Contact Pages?

export default function Footer() {
	return (
		<div className="fixed-bottom NavBar">
			<Link key="About" to="/about" className="nav-link">
				About
			</Link>{' '}
			<Link key="Contact" to="/contact" className="nav-link">
				Contact
			</Link>
		</div>
	);
}
