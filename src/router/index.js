import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import About from '../pages/About';

const AppRouter = () => {
	return (
		<Router>
			<NavBar
				routes={routes.filter(
					item => !(item.key === 'About' || item.key === 'Contact')
				)}
			/>
			<Switch>
				{/*
					{routes
					.filter(item => !(item.key === 'About' || item.key === 'Contact'))
					.map(({ Component, key, path }) => (
						<Route
							key={key}
							exact
							path={path}
							component={() => <Component page={key} />}
						></Route>
					))}
					*/}
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
			</Switch>
			<Footer
				routes={routes.filter(
					item => !(item.key === 'Login' || item.key === 'SignUp')
				)}
			/>
		</Router>
	);
};

export default AppRouter;
