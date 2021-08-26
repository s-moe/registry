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
		<div className="CreateComponent container">
			<button className="btn btn-primary mb-3" type="button">
				Create a Listing
			</button>
			<div>
				<form onSubmit={handleSubmit} className="create-form">
					<div className="mb-3 form-floating">
						<input
							type="text"
							id="img"
							value={newListing.img}
							onChange={handleChange}
							className="img-input form-control"
							name="floatingImg"
						/>
						<label className="form-label" htmlFor="floatingImg">
							Image{' '}
						</label>
					</div>
					<div className="mb-3 form-floating">
						<input
							type="text"
							id="name"
							value={newListing.name}
							onChange={handleChange}
							className="name-input form-control"
							name="floatingTitle"
						/>
						<label className="form-label" htmlFor="floatingTitle">
							Title or Product Name
						</label>
					</div>
					<div className="mb-3 form-floating">
						<input
							type="text"
							id="description"
							value={newListing.description}
							onChange={handleChange}
							className="description-input form-control"
							name="floatingDescription"
						/>
						<label className="form-label" htmlFor="floatingDescription">
							Description{' '}
						</label>
					</div>
					<div className="mb-3 form-floating">
						<input
							type="number"
							id="qty"
							value={newListing.qty}
							onChange={handleChange}
							className="qty-input form-control"
							name="floatingQty"
						/>
						<label className="form-label" htmlFor="floatingQty">
							Quantity{' '}
						</label>
					</div>
					<div className="mb-3 form-floating">
						<input
							type="number"
							id="amount"
							value={newListing.amount}
							onChange={handleChange}
							className="amount-input form-control"
							name="floatingPrice"
						/>
						<label className="form-label" htmlFor="floatingPrice">
							Price
						</label>
					</div>

					<button className="btn btn-primary mb-3" type="submit">
						Add Item
					</button>
				</form>
			</div>
		</div>
	);
}
