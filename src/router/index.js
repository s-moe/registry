import React, { useState, createContext, useContext } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import { context } from '../components/context';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import Search from '../pages/Search';

const AppRouter = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const [loggedInUser, setLoggedInUser] = useState('');
	const [token, setToken] = useState('');

	return (
		<Router>
			<context.Provider
				value={{
					user,
					setUser,
					loggedInUser,
					setLoggedInUser,
					token,
					setToken
				}}
			>
				<NavBar
					routes={routes.filter(
						item => !(item.key === 'About' || item.key === 'Contact')
					)}
				/>
				<div className="component-container">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/howitworks">
							<HowItWorks />
						</Route>
						<Route exact path="/search">
							<Search />
						</Route>
					</Switch>
				</div>
				<Footer
					routes={routes.filter(
						item => !(item.key === 'Login' || item.key === 'SignUp')
					)}
				/>
			</context.Provider>
		</Router>
	);
};

export default AppRouter;
