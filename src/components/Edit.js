import React, { useState, useRef, useEffect } from 'react';

export default function Edit(props) {
	const imgInput = useRef(null);
	const nameInput = useRef(null);
	const descriptionInput = useRef(null);
	const qtyInput = useRef(null);
	const amountInput = useRef(null);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/registries/${props.listing._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					img: imgInput.current.value,
					name: nameInput.current.value,
					description: descriptionInput.current.value,
					qty: qtyInput.current.value,
					amount: amountInput.current.value
				})
			});
			console.log(props.listing);
			const data = await response.json();
			props.setListing(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/registries/${props.listing._id}`);
				const data = await response.json();
				props.setListing(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<button
				className="btn btn-primary"
				type="button"
				data-toggle="collapse"
				data-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				Update/Edit Listing
			</button>

			<div className="collapse" id="collapseExample">
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleUpdate}
				>
					<label>
						{' '}
						Image:{' '}
						<input
							type="text"
							ref={imgInput}
							defaultValue={props.listing.img}
						/>
					</label>

					<label>
						{' '}
						Title:{' '}
						<input
							type="text"
							ref={nameInput}
							defaultValue={props.listing.name}
						/>
					</label>

					<label>
						{' '}
						Description:{' '}
						<input
							type="text"
							ref={descriptionInput}
							defaultValue={props.listing.description}
						/>
					</label>

					<label>
						{' '}
						Quantity:{' '}
						<input
							type="text"
							ref={qtyInput}
							defaultValue={props.listing.qty}
						/>
					</label>

					<label>
						{' '}
						Price:{' '}
						<input
							type="text"
							ref={amountInput}
							defaultValue={props.listing.amount}
						/>
					</label>
					<button
						type="submit"
						value="Submit Update"
						className="btn btn-success"
						data-target="#collapseExample"
						data-toggle="collapse"
						aria-expanded="false"
						aria-controls="collapseExample"
					>
						Submit Update
					</button>
				</form>
			</div>
		</div>
		//{/*collapse div end*/}
	);
}
