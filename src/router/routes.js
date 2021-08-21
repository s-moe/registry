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
		Component: Home,
		key: 'Home',
		path: '/'
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
	}
];

export default routes;
