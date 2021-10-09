import React from "react";
import Navbar from "../Components/Navigation/navbar.component";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component"
import Footer from './footer';

const DefaultLayout = (props) => {
	return (
		<>
		<Navbar />
		<HeroCarousal />
		{props.children}
		<Footer />
		</>
	);
};

export default DefaultLayout;