import React, { useState, useEffect } from 'react';

import CreateListing from '../components/CreateListing';
import Listings from '../components/Listings';
import Delete from '../components/Delete';
import Edit from '../components/Edit';

export default function SignUp() {
	const [listings, setListings] = useState([]);
	const [listing, setListing] = useState({});
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
		setUser({ ...user, [e.target.name]: e.target.value });
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
			console.log(data);
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
			<div className="signup-div form-floating mb-3 container">
				<h1 className="h3 mb-3 fw-normal">Create your account</h1>

				<div className="mb-3 form-floating row">
					<form onSubmit={handleSignUp} className="signup-form row">
						<div className="mb-3  form-floating col-md-6">
							<input
								type="text"
								name="firstName"
								value={user.firstName}
								onChange={handleChange}
								className="form-control"
								id="floatingFirstName"
							/>
							<label className="form-label" htmlFor="floatingFirstName">
								First Name
							</label>
						</div>

						<div className="mb-3 form-floating col-md-6">
							<input
								type="text"
								name="lastName"
								value={user.lastName}
								onChange={handleChange}
								className="form-control"
								id="floatingLastName"
							/>
							<label className="form-label" htmlFor="floatingLastName">
								Last Name
							</label>
						</div>

						<div className="mb-3 form-floating col-md-6">
							<input
								type="text"
								name="email"
								value={user.email}
								onChange={handleChange}
								className="form-control"
								id="floatingEmail"
							/>
							<label className="form-label" htmlFor="floatingEmail">
								Email
							</label>
						</div>

						<div className="mb-3 form-floating col-md-6">
							<input
								type="password"
								name="password"
								value={user.password}
								onChange={handleChange}
								className="form-control"
								id="floatingPasscode"
							/>
							<label className="form-label" htmlFor="floatingPassword">
								Password
							</label>
						</div>
						<div className="mb-3">
							<button
								type="submit"
								value="Register"
								className="btn btn-success mb-3"
							>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="form-div">
				<button
					className="btn btn-primary mb-3"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseLogin"
					aria-expanded="false"
					aria-controls="collapseLogin"
				>
					Already have an account? Login.
				</button>
				<form
					onSubmit={handleLogin}
					className="form-signin collapse mb-3"
					id="collapseLogin"
				>
					<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

					<div className="form-floating">
						<input
							type="email"
							name="email"
							value={user.email}
							onChange={handleChange}
							className="form-control col-auto"
							placeholder="name@example.com"
							id="floatingInput"
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>

					<div className="form-floating">
						<input
							type="password"
							name="password"
							value={user.password}
							onChange={handleChange}
							className="form-control col-auto"
							placeholder="Password"
							id="floatingPassword"
						/>
						<label htmlFor="floatingPassword">Password</label>
					</div>
					<div className="col-auto">
						<span id="passwordHelpInline" className="form-text">
							Must be 8-20 characters long.
						</span>
					</div>

					{/*
						<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me{' '}
						</label>
					</div>
						*/}
					<div className="mb-1">
						<button
							className="w-100 btn btn-primary mb-3"
							type="submit"
							data-bs-toggle="collapse"
							data-bs-target="#collapseLogin"
							aria-expanded="false"
							aria-controls="collapseLogin"
						>
							Login
						</button>
					</div>
				</form>
			</div>

			<div>
				{token && loggedInUser === 'sarahmoe@admindotty.com' ? (
					<>
						<CreateListing listings={listings} setListings={setListings} />
						<Listings listings={listings} setListing={setListing} />
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
}
