import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignUp from './SignUp';
import Login from './Login';

export default function Home() {
	return (
		<div className="HomePage container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src="/img/celebration_img.jpeg"
						id="imgTag"
						className="d-block mx-lg-auto img-fluid"
						alt="Celebration img"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>

				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">Dotty</h1>
					<h3 className="display-7 fw-bold lh-1 mb-3">
						A Registry for the Rest of Us.
					</h3>
					<p className="lead">
						You’ve worked hard to accomplish something. Whether it’s making a
						career transition, getting out of debt, or finally potty-training
						your fur baby.{' '}
					</p>
					<p className="lead">
						Your non-traditional milestones matter. We make it possible for you
						to register for your big (or small) moment and celebrate with your
						community no matter the occasion. All celebrations welcome.{' '}
					</p>

					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<Link to="/signup" className="btn btn-primary">
							Sign Up
						</Link>
						<Link to="/login" className="btn btn-primary">
							Find a Registry
						</Link>
					</div>
					<br />
					<Link to="/login" className="">
						Already have an account? Login.
					</Link>
				</div>
			</div>
		</div>
	);
}
