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
				className="btn btn-primary mb-3"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#a${props.collapse}`}
				aria-expanded="false"
				aria-controls={props.collapse}
			>
				Update/Edit Listing
			</button>

			<div className="collapse" id={`a${props.collapse}`}>
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleUpdate}
					className="edit-form"
				>
					<div className="mb-3 form-floating">
						<input
							type="text"
							ref={imgInput}
							defaultValue={props.listing.img}
							className="form-control"
							name="floatingImg"
						/>
						<label className="form-label" htmlFor="floatingImg">
							{' '}
							Image{' '}
						</label>
					</div>

					<div className="mb-3 form-floating">
						<input
							type="text"
							ref={nameInput}
							defaultValue={props.listing.name}
							className="form-control"
							name="floatingTitle"
						/>
						<label className="form-label" htmlFor="floatingTitle">
							{' '}
							Title{' '}
						</label>
					</div>

					<div className="mb-3 form-floating">
						<input
							type="text"
							ref={descriptionInput}
							defaultValue={props.listing.description}
							className="form-control"
							name="floatingDescription"
						/>
						<label className="form-label" htmlFor="floatingDescription">
							{' '}
							Description{' '}
						</label>
					</div>

					<div className="mb-3 form-floating">
						<input
							type="text"
							ref={qtyInput}
							defaultValue={props.listing.qty}
							className="form-control"
							name="floatingQty"
						/>
						<label className="form-label" htmlFor="floatingQty">
							{' '}
							Quantity{' '}
						</label>
					</div>

					<div className="mb-3 form-floating">
						<input
							type="text"
							ref={amountInput}
							defaultValue={props.listing.amount}
							className="form-control"
							name="floatingPrice"
						/>
						<label className="form-label" htmlFor="floatingPrice">
							{' '}
							Price{' '}
						</label>
					</div>
					<button
						type="submit"
						value="Submit Update"
						className="btn btn-success mb-3"
					>
						Submit Update
					</button>
				</form>
			</div>
		</div>
	);
}
