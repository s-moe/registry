import React, { useState, useEffect } from 'react';

import Listings from '../components/Listings';

export default function Search() {
	const [listings, setListings] = useState([]);

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
	}, []);

	return (
		<div className="listings-container">
			<Listings listings={listings} />
		</div>
	);
}
