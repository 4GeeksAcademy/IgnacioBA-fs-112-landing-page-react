import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


//create your first component
const Home = () => {
	const cards = [1, 2, 3, 4];
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="bg-light p-4 rounded m-4 mx-auto" style={{ maxWidth: "1300px" }}>
					<Jumbotron />
				</div>
			</div>
			<div className= "container my-4">
				<div className="row g-4">
				{cards.map((index) => (
					<div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
				))}
			</div>
			</div>
			
		</div>

	);
};

export default Home;