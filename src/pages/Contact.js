///I want to be able to have this form submitted and emailed to the owner(me)
import React, { useState } from 'react';

export default function Contact() {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		comments: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();
		return {
			/*Just a note saying thanks, their comment has been submimtted and the form disappears*/
		};
	};

	const handleChange = e => {
		setContact({ ...contact, [e.target.id]: e.target.value });
	};

	return (
		<div className="ContactPage">
			<form onSubmit={handleSubmit}>
				<label>Name: </label>
				<input
					type="text"
					id="name"
					value={contact.name}
					onChange={handleChange}
					className="name-input"
				/>
				<label>Email: </label>
				<input
					type="text"
					id="email"
					value={contact.email}
					onChange={handleChange}
					className="email-input"
				/>
				<label>Comments: </label>
				<input
					type="text"
					id="comments"
					value={contact.comments}
					onChange={handleChange}
					className="comments-input"
				/>
				<input type="submit" value="Submit" className="submit-btn" />
			</form>
		</div>
	);
}
