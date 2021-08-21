import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignUp from './SignUp';
import Login from './Login';

export default function Home() {
	return (
		<div className="HomePage container">
			<div>
				<Link to="/signup" className="btn btn-primary">
					Sign Up
				</Link>

				<Link to="/find" className="btn btn-primary">
					Find a Registry
				</Link>
				<Link to="/login" className="">
					Already have an account? Login.
				</Link>
			</div>
		</div>
	);
}
