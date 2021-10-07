import React from 'react';
import MovieNavbar from "../Components/Navigation/movieNavbar.component";

const MovieLayout = (props) => {
	return (
		<>
		<MovieNavbar />
		{props.children}
		</>
	);
};

export default MovieLayout;