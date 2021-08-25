import Edit from './Edit';
import Delete from './Delete';
import React from 'react';

export default function Listings(props) {
	return (
		<div className="listings">
			<ul className="row">
				{props.listings &&
					props.listings.map(listing => {
						return (
							<li key={listing._id} className="col-sm-4">
								<div className="card">
									<img
										src={listing.img}
										alt="listing image"
										className="card-img-top"
									/>{' '}
									{/*unsure what to put here*/}
									<div className="card-body">
										<h3 className="card-title">{listing.name}</h3>
										<p className="card-description card-text">
											{listing.description}
										</p>
										<p className="card-qty card-text">
											Quantity: {listing.qty}
										</p>
										<p className="card-amount card-text">
											Price: {listing.amount}
										</p>
									</div>{' '}
									{/*card-body div end*/}
									<div className="card-body">
										<Edit
											listing={listing}
											setListing={props.setListing}
											collapse={listing._id}
										/>
										<Delete listing={listing} />
									</div>{' '}
									{/*card-body div end*/}
								</div>{' '}
								{/*card div end*/}
							</li>
						);
					})}
			</ul>
		</div>
	);
}
