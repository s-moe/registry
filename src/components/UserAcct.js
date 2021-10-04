import React, { useState, useEffect, useContext } from 'react';
import {context} from './context'
import CreateListing from './CreateListing';
import Listings from './Listings';
import Delete from './Delete';
import Edit from './Edit';


export default function UserAcct() {
	const {
		user,
		setUser,
		token,
		setToken,
		loggedInUser,
		setLoggedInUser
	} = useContext(context);
	const [listings, setListings] = useState({}) //do I need anything else here? the img, title, description, etc.?
	const [toggle, setToggle] = useState(true);

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
}, [listings]);




//useEffect for when the user data is updated


	return (
		<div className="UserAcctPage">
			//View Account details in a div

			//THEY SHOULDN'T HAVE THE BUTTONS FOR SIGNUP OR LOGIN ONCE THEY ARE HERE.
			<SignUp token={token} setToken={setToken} user={user}
			setUser={setUser} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
			toggle={toggle} setToggle={setToggle}/>


			<Login token={token} setToken={setToken} user={user}
			setUser={setUser} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
			toggle={toggle} setToggle={setToggle}/>

			<button
				className="btn btn-primary"
				type="button"
				data-toggle="collapse"
				data-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				Account
			</button> //I WANT THEM TO BE ABLE TO VIEW THEIR ACCT DETAILS FROM SIGNUP AND EDIT THOSE DETAILS (NOT THE UNIQUE DETAIL OF COURSE)
			<div className="collapse" id="collapseExample">
				<>
				//if no user data don't show, but once we have it, show it & edit and update
				//objects.keys... from booksmarks Show.js
				</>
			</div>
			//update account details in a form
      <button
      className="btn btn-primary"
      type="button"
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
      >
      Edit Account
      </button>

      //CREATE A LISTING
      <CreateListing listings={listings} setListings={setListings}/>


      //view all listings - CAN I MAKE A SEPARATE COMPONENT SO THAT ANOTHER USER CAN VIEW, BUT NOT EDIT OR DELETE?
      <Listings listings={listings}>
				<Edit listing={listing} setListing={setListing}/> //do I need to pass this to them?
				<Delete listing={listing}/>
			</Listings> //can I add the delete and edit inside listings? this way I don't have to put them inside the Listings component itself?
		</div>
	);
}
