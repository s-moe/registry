import React, { useState } from 'react';

import Listings from '../components/Listings';

export default function Search() {
	const [listings, setListings] = useState([]);
	const [token, setToken] = useState('');
	const [loggedInUser, setLoggedInUser] = useState('');

	return (
		<Listings listings={listings} token={token} loggedInUser={loggedInUser} />
	);
}
