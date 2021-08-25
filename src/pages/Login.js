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
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	return (
		<div className="LoginPage">
			<div className="form-div">
				<form onSubmit={handleLogin} className="form-signin">
					<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
					<div className="form-floating">
						<label className="floatingInput" htmlFor={user.email}>
							Email address
						</label>
						<input
							type="email"
							id={user.email}
							value={user.email}
							onChange={handleChange}
							className="form-control"
							placeholder="name@example.com"
						/>
					</div>
					<div className="form-floating">
						<label className="floatingPassword" htmlFor={user.password}>
							Password
						</label>
						<input
							type="password"
							id={user.password}
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
					<div className="mb-3">
						<button className="btn btn-success login-btn" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>

			<div className="signup-div form-floating mb-3">
				<button className="btn btn-primary" type="button">
					Need an Account? Sign Up.
				</button>

				<div className="mb-3">
					<form
						style={{ display: 'flex', flexDirection: 'column' }}
						onSubmit={handleSignUp}
						className="signup-form"
					>
						<div className="mb-3">
							<label className="form-label form-floating">
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
							<label className="form-label form-floating">
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
							<label className="form-label form-floating">
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
							<label className="form-label form-floating">
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
						<div className="mb-3">
							<button
								type="submit"
								value="Register"
								className="btn btn-success"
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
						<CreateListing listings={listings} />
						<Listings listings={listings} setListing={setListing} />
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
}
