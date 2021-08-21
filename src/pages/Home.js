import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignUp from './SignUp';
import Login from './Login';

export default function Home() {
	return (
		<div className="HomePage container">
			<NavBar />

			<div>
				<Link to="/signup" className="btn btn-primary">
					Sign Up
				</Link>

				<Link to="/login" className="btn btn-primary">
					Login
				</Link>
			</div>

			<Footer />
		</div>
	);
}
