import Edit from './Edit';
import Delete from './Delete';

export default function Listings(props) {
	return (
		<div className="listings">
			<ul className="row">
				{props.listings.map(listing => {
					return (
						<li key={listing._id} className="col-sm-4">
							<div className="card">
								<div className="card-body">
									<img src={listing.img} alt="listing image" />{' '}
									{/*unsure what to put here*/}
									<h3 className="card-title">{listing.name}</h3>
									<p className="card-description">{listing.description}</p>
									<p className="card-qty">Quantity: {listing.qty}</p>
									<p className="card-amount">Price: {listing.amount}</p>
									<Edit listing={listing} />
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
