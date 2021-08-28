import React, { useState, useEffect } from 'react';
import CreateListing from '../components/CreateListing';
import Listings from '../components/Listings';
import Delete from '../components/Delete';
import Edit from '../components/Edit';

export default function Login() {
	const [toggleLogin, setToggleLogin] = useState(false);
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
			console.log(data);
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
			{!toggleLogin ? (
				<div className="form-div container">
					<form onSubmit={handleLogin} className="form-signin mb-3">
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

						<div className="mb-1">
							<button className="w-100 btn btn-primary mb-3" type="submit">
								Login
							</button>
						</div>
					</form>
				</div>
			) : (
				<div className="form-div form-floating mb-3 container">
					<h1 className="h3 mb-3 fw-normal">Create your account</h1>

					<div className="mb-3 form-floating row">
						<form className="signup-form row">
							<div className="mb-3 pl-2  form-floating col-md-6">
								<input
									type="text"
									name="firstName"
									value={user.firstName}
									onChange={handleChange}
									className="form-control"
									id="floatingFirstName"
									placeholder="First Name"
								/>
								<label htmlFor="floatingFirstName">First Name</label>
							</div>

							<div className="mb-3 pl-2 form-floating col-md-6">
								<input
									type="text"
									name="lastName"
									value={user.lastName}
									onChange={handleChange}
									className="form-control"
									id="floatingLastName"
									placeholder="Last Name"
								/>
								<label htmlFor="floatingLastName">Last Name</label>
							</div>

							<div className="mb-3 pl-2 form-floating col-md-6">
								<input
									type="text"
									name="email"
									value={user.email}
									onChange={handleChange}
									className="form-control"
									id="floatingEmail"
									placeholder="Email"
								/>
								<label htmlFor="floatingEmail">Email</label>
							</div>

							<div className="mb-3 pl-2 form-floating col-md-6">
								<input
									type="password"
									name="password"
									value={user.password}
									onChange={handleChange}
									className="form-control"
									id="floatingPasscode"
									placeholder="Password"
								/>
								<label htmlFor="floatingPassword">Password</label>
							</div>
						</form>
					</div>
					<div className="mb-3">
						<button
							type="submit"
							value="Register"
							className="btn btn-success mb-3"
							onClick={handleSignUp}
						>
							Register
						</button>
					</div>
				</div>
			)}
			<button
				className="btn btn-primary mb-3"
				type="button"
				onClick={() =>
					toggleLogin ? setToggleLogin(false) : setToggleLogin(true)
				}
			>
				{toggleLogin
					? "Don't have an account? Register."
					: 'Already have an account? Login.'}
			</button>

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
