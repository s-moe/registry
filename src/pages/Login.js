import React from 'react';
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

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	return (
		<div className="LoginPage">
			<form onSubmit={handleLogin}>
				<input
					type="text"
					id="username"
					value={user.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					id="password"
					value={user.password}
					onChange={handleChange}
				/>
				<input type="submit" value="Login" />
			</form>
			//a button to have them register instead
			<button
				className="btn btn-primary"
				type="button"
				data-toggle="collapse"
				data-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				Need an Account? Sign Up.
			</button>
			<div className="collapse" id="collapseExample">
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleSignUp}
				>
					<label>
						First Name:
						<input
							type="text"
							id="firstName"
							value={user.firstName}
							onChange={handleChange}
						/>
					</label>

					<label>
						Last Name:
						<input
							type="text"
							id="lastName"
							value={user.lastName}
							onChange={handleChange}
						/>
					</label>

					<label>
						Email:
						<input
							type="text"
							id="email"
							value={user.email}
							onChange={handleChange}
						/>
					</label>

					<label>
						Password:
						<input
							type="password"
							id="password"
							value={user.password}
							onChange={handleChange}
						/>
					</label>

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
				)}
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
			)} )}
		</div> //login page div end
	);
}
