import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="bg-light p-4 rounded m-4 mx-auto" style={{ maxWidth: "1300px" }}>
					<Jumbotron />
				</div>
			</div>
			<div className="container mt-4 d-flex flex-row mx-auto" style={{ maxWidth: "1300px" }}>
				<div className="card1  mx-3">
					<Card />
				</div>
				<div className="card2  mx-3">
					<Card />
				</div>
				<div className="card3  mx-3">
					<Card />
				</div>
				<div className="card4  mx-3">
					<Card />
				</div>
			</div>



		</div>

	);
};

export default Home;