import React, { useState, useEffect } from 'react';
import CreateListing from '../components/CreateListing';
import Listings from '../components/Listings';
import Delete from '../components/Delete';
import Edit from '../components/Edit';

export default function Login() {
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
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div className="LoginPage">
			<div className="form-div ">
				<form onSubmit={handleLogin} className="form-signin">
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
						<button className="w-100 btn btn-primary mb-3" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>

			<div className="signup-div form-floating mb-3 container">
				<button
					className="btn btn-primary mb-3"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseSignUp"
					aria-expanded="false"
					aria-controls="collapseSignUp"
				>
					Need an Account? Sign Up.
				</button>

				<div className="mb-3 form-floating row collapse" id="collapseSignUp">
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
								data-bs-toggle="collapse"
								data-bs-target="#collapseSignUp"
								aria-expanded="false"
								aria-controls="collapseSignUp"
							>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>

			<div>
				{token ? (
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
