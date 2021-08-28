import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
	return (
		<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<svg
						className="bd-placeholder-img"
						width="100%"
						height="100%"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<rect width="100%" height="100%" fill="#f7db69" />
					</svg>

					<div className="container">
						<div className="carousel-caption text-start">
							<div className="carousel-p">
								<h1>Sign Up</h1>
								<p>Fill out a simple questionnaire to get started.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="/signup">
										Sign up today
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<svg
						className="bd-placeholder-img"
						width="100%"
						height="100%"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<rect width="100%" height="100%" fill="#f7db69" />
					</svg>

					<div className="container">
						<div className="carousel-caption">
							<h1>Create Your Registry</h1>
							<p>Add items you'd like to receive to your registry.</p>
							<p>
								<a className="btn btn-lg btn-primary" href="/login">
									Learn more
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<svg
						className="bd-placeholder-img"
						width="100%"
						height="100%"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<rect width="100%" height="100%" fill="#f7db69" />
					</svg>

					<div className="container">
						<div className="carousel-caption text-end">
							<h1>Tell your friends and family</h1>
							<p>
								Share your unique registry link with your friends and family so
								they can celebrate with you.
							</p>
							<p>
								<a className="btn btn-lg btn-primary" href="/signup">
									Share
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#myCarousel"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#myCarousel"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
