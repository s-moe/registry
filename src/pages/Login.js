import React, { useState, useEffect } from 'react';
import CreateListing from '../components/CreateListing';
import Listings from '../components/Listings';
import Delete from '../components/Delete';
import Edit from '../components/Edit';

export default function Login() {
	const [listings, setListings] = useState({}); //can or should I set the same state in two different places?
	const [token, setToken] = useState('');
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const [loggedInUser, setLoggedInUser] = useState('');

	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/registries');
				const data = await response.json();
				setListings(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [listings]);

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	const handleSignUp = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.user.email);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.email);
			//for the local storage so they don't have to log in every time it refreshes
		} catch (error) {
			console.error(error);
		}
	};

	const handleLogin = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.user.email);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.email);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	return (
		<div className="LoginPage">
			<form onSubmit={handleLogin} className="form-signin">
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

				<div className="form-floating">
					<label className="floatingInput">Email address</label>
					<input
						type="email"
						id="floatingInput"
						value={user.email}
						onChange={handleChange}
						className="form-control"
						placeholder="name@example.com"
					/>
				</div>

				<div className="form-floating">
					<label className="floatingPassword">Password</label>
					<input
						type="password"
						id="floatingPassword"
						value={user.password}
						onChange={handleChange}
						className="form-control"
						placeholder="Password"
					/>
				</div>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me{' '}
					</label>
				</div>

				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Login
				</button>
			</form>
		</div>
	);
}
