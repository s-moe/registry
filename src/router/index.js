import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	return (
		<Router>
			<NavBar
				routes={routes.filter(
					item => !(item.key === 'About' || item.key === 'Contact')
				)}
			/>
			<Switch>
				{routes
					.filter(item => !(item.key === 'About' || item.key === 'Contact'))
					.map(({ Component, key, path }) => (
						<Route
							key={key}
							path={path}
							component={() => <Component page={key} />}
						></Route>
					))}
				<Footer
					routes={routes.filter(
						item => !(item.key === 'Login' || item.key === 'SignUp')
					)}
				/>
			</Switch>
		</Router>
	);
};

export default AppRouter;
