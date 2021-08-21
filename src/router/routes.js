import React from 'react';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},

	{
		Component: SignUp,
		key: 'SignUp',
		path: '/signup'
	},
	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
