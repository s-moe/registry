import React, { useState } from 'react';

export default function Delete(props) {
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/registries/${props.listing._id}`, {
				method: 'DELETE',
				header: {
					'Content-Type': 'application/json'
				}
			});
			const deletedListing = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/login');
		}
	};

	return (
		<button className="btn btn-danger" onClick={handleDelete}>
			Delete Listing
		</button>
	);
}
