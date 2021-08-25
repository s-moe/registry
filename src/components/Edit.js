import React, { useState, useRef, useEffect } from 'react';

export default function Edit(props) {
	const collapse = props.collapse;
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
				id={`#${collapse.toString()}`}
			>
				Update/Edit Listing
			</button>

			<div className="" id={collapse.toString()}>
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleUpdate}
					className="edit-form"
				>
					<div className="mb-3">
						<label className="form-label">
							{' '}
							Image:{' '}
							<input
								type="text"
								ref={imgInput}
								defaultValue={props.listing.img}
								className="form-control"
							/>
						</label>

						<label className="form-label">
							{' '}
							Title:{' '}
							<input
								type="text"
								ref={nameInput}
								defaultValue={props.listing.name}
								className="form-control"
							/>
						</label>

						<label className="form-label">
							{' '}
							Description:{' '}
							<input
								type="text"
								ref={descriptionInput}
								defaultValue={props.listing.description}
								className="form-control"
							/>
						</label>

						<label className="form-label">
							{' '}
							Quantity:{' '}
							<input
								type="text"
								ref={qtyInput}
								defaultValue={props.listing.qty}
								className="form-control"
							/>
						</label>

						<label className="form-label">
							{' '}
							Price:{' '}
							<input
								type="text"
								ref={amountInput}
								defaultValue={props.listing.amount}
								className="form-control"
							/>
						</label>
						<button
							type="submit"
							value="Submit Update"
							className="btn btn-success"
						>
							Submit Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
