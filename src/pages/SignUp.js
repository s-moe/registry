import React, { useState, useEffect, useContext } from 'react';
import { context } from '../components/context';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const {
		user,
		setUser,
		loggedInUser,
		setLoggedInUser,
		token,
		setToken
	} = useContext(context);
	let history = useHistory();
	const [toggleLogin, setToggleLogin] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSignUp = async e => {
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
			setLoggedInUser(data.user.firstName);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.firstName);
			history.push('/useracct');
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
			setLoggedInUser(data.user.firstName);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.firstName);
			history.push('/useracct');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="SignUpPage">
			{!toggleLogin ? (
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
			) : (
				<div className="form-div container">
					<form onSubmit={handleLogin} className="form-signin mb-3">
						<div className="form-floating">
							<input
								type="text"
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
								type="text"
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
		</div>
	);
}
