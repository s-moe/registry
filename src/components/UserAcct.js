import React, { useState, useEffect, useContext, useRef } from 'react';
import { context } from './context';

export default function UserAcct(props) {
	const {
		user,
		setUser,
		token,
		setToken,
		loggedInUser,
		setLoggedInUser
	} = useContext(context);

	const firstNameInput = useRef(null);
	const lastNameInput = useRef(null);
	const emailInput = useRef(null);
	const passwordInput = useRef(null);

	const handleUpdate = async event => {
		event.preventDefault();
		try {
			const response = await fetch(`/api/user/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstName: firstNameInput.current.value,
					lastName: lastNameInput.current.value,
					email: emailInput.current.value,
					password: passwordInput.current.value
				})
			});
			const data = await response.json();
			setUser(data);
			// firstName = '';
			// lastName = '';
			// console.log(enteredLink);
		} catch (error) {
			console.error(error);
		}
	};

	//useEffect for when the user data is updated

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/user/${props.match.params.id}`);
				const data = await response.json();
				setUser(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="UserAcct container">
			<div className="jumbotron">
				<>
					<p>{user.firstName}</p>
					<p>{user.lastName}</p>
					<p>{user.email}</p>
					<p>{user.password}</p>
				</>

				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Update Info
				</button>
				<div className="collapse" id="collapseExample">
					<form
						style={{ display: 'flex', flexDirection: 'column' }}
						onSubmit={handleUpdate}
					>
						<label>
							{' '}
							First Name:{' '}
							<input
								type="text"
								ref={firstNameInput}
								defaultValue={user.firstName}
							/>
						</label>
						<label>
							{' '}
							Last Name:{' '}
							<input
								type="text"
								ref={lastNameInput}
								defaultValue={user.lastName}
							/>
						</label>
						<label>
							{' '}
							Email:{' '}
							<input type="text" ref={emailInput} defaultValue={user.email} />
						</label>
						<label>
							{' '}
							Password:{' '}
							<input
								type="text"
								ref={passwordInput}
								defaultValue={user.password}
							/>
						</label>
						<button
							type="submit"
							value="Submit Update"
							className="btn btn-success"
							data-target="#collapseExample"
							data-toggle="collapse"
							aria-expanded="false"
							aria-controls="collapseExample"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
