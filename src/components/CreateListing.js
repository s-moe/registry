import React, { useState } from 'react';

export default function CreateListing(props) {
	const [newListing, setNewListing] = useState({
		img: '',
		name: '',
		description: '',
		qty: '',
		amount: ''
	});
	//{/*do qty and amount need '' if they aren't strings?*/}

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/registries', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newListing)
			});
			const data = await response.json();
			props.setListings([...props.listings, data]);
			setNewListing({
				img: '',
				name: '',
				description: '',
				qty: '',
				amount: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setNewListing({ ...newListing, [e.target.id]: e.target.value });
	};

	return (
		<div className="CreateComponent">
			<button
				className="btn btn-primary"
				type="button"
				data-toggle="collapse"
				data-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				Create a Listing
			</button>
			<div className="collapse" id="collapseExample">
				<form onSubmit={handleSubmit} className="create-form">
					<div className="mb-3">
						<label className="form-label">Image: </label>
						<input
							type="text"
							id="img"
							value={newListing.img}
							onChange={handleChange}
							className="img-input form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Title or Product Name: </label>
						<input
							type="text"
							id="name"
							value={newListing.name}
							onChange={handleChange}
							className="name-input form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Description: </label>
						<input
							type="text"
							id="description"
							value={newListing.description}
							onChange={handleChange}
							className="description-input form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Quantity: </label>
						<input
							type="number"
							id="qty"
							value={newListing.qty}
							onChange={handleChange}
							className="qty-input form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Price: </label>
						<input
							type="number"
							id="amount"
							value={newListing.amount}
							onChange={handleChange}
							className="amount-input form-control"
						/>
					</div>

					<input type="submit" value="Add Item" className="add-btn " />
				</form>
			</div>
		</div>
	);
}
