import React from 'react';
import MovieNavbar from "../Components/Navigation/movieNavbar.component";
import Footer from './footer';

const MovieLayout = (props) => {
	return (
		<>
		<MovieNavbar />
		{props.children}
		<Footer />
		</>
	);
};

export default MovieLayout;