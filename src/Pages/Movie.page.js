import React from 'react';
import MovieHero from '../Components/MovieHero/MovieHero.component';
import { CastSlider, CrewSlider } from '../Components/CastCrew/castCrew.component';
import { BiCameraMovie } from 'react-icons/bi';

const MoviePage = () => {
	return (
		<>
			<MovieHero />
			<div className="my-12 container mx-auto px-4 lg:w-2/3 lg:ml-60">
				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
					<p>Amanda Waller dispatch the Task Force X members to the Corto Maltese island to destroy Jotunheim, a Nazi-era prison and laboratory. Available in 4K.</p>
				</div>

				<hr className="my-8" />
				
				<div className="flex flex-col items-start gap-4">
					<h2 className="text-gray-800 font-bold text-2xl">Applicable offers</h2>
					<div className="flex items-start gap-3 bg-yellow-100 border-2 border-dashed border-yellow-300 rounded-md w-96 p-2">
						<BiCameraMovie className="w-9 h-9"/>
						<div className="flex flex-col items-start">
							<h3 className="text-gray-800 text-lg">Filmy Pass</h3>
							<p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
						</div>
					</div>
				</div>

				<hr className="my-8" />

				<div className="flex flex-col gap-4">
					<h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
					<CastSlider />
				</div>

				<hr className="my-8" />

				<div className="flex flex-col gap-4">
					<h2 className="text-gray-800 font-bold text-2xl">Crew</h2>
					<CrewSlider />
				</div>
			</div>
		</>
	);
};

export default MoviePage;