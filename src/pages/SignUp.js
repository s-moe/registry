import React, { useState, useEffect } from 'react';

import CreateListing from '../components/CreateListing';
import Listings from '../components/Listings';
import Delete from '../components/Delete';
import Edit from '../components/Edit';

export default function SignUp() {
	const [listings, setListings] = useState({}); //do I need anything else here? the img, title, description, etc.?
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

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

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

	return (
		<div className="SignUpPage">
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSignUp}
				className="signup-form"
			>
				<div className="mb-3">
					<label className="form-label">
						First Name:
						<input
							type="text"
							id="firstName"
							value={user.firstName}
							onChange={handleChange}
							className="form-control"
						/>
					</label>
				</div>

				<div className="mb-3">
					<label className="form-label">
						Last Name:
						<input
							type="text"
							id="lastName"
							value={user.lastName}
							onChange={handleChange}
							className="form-control"
						/>
					</label>
				</div>

				<div className="mb-3">
					<label className="form-label">
						Email:
						<input
							type="text"
							id="email"
							value={user.email}
							onChange={handleChange}
							className="form-control"
						/>
					</label>
				</div>

				<div className="mb-3">
					<label className="form-label">
						Password:
						<input
							type="password"
							id="password"
							value={user.password}
							onChange={handleChange}
							className="form-control"
						/>
					</label>
				</div>

				<button
					type="submit"
					value="Register"
					className="btn btn-success"
					data-target="#collapseExample"
					data-toggle="collapse"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Register
				</button>
			</form>
			<div>
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Already registered? Login.
				</button>
				<form
					onSubmit={handleLogin}
					className="collapse mb-3"
					id="collapseExample"
				>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input
							type="email"
							id="email"
							value={user.email}
							onChange={handleChange}
							className="form-control"
							placeholder="name@example.com"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input
							type="password"
							id="password"
							value={user.password}
							onChange={handleChange}
							className="form-control"
							placeholder="your password"
						/>
					</div>
					<div>
						<input type="submit" value="Login" className="submit btn" />
					</div>
				</form>
			</div>
			<div>
				{token ? (
					<>
						<CreateListing listings={listings} setListings={setListings} />
						<Listings listings={listings} />
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
}
