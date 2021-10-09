import React from 'react';
import Slider from 'react-slick';
import settings from '../../Config/posterCarousal.config';

const CastCrew = (props) => {
	return (
		<>
		<div className="flex flex-col items-center gap-2">
			<div className="rounded-full w-32 h-32">
				<img 
				src={props.src} 
				alt="cast" 
				className="rounded-full w-full h-full"
				/>
			</div>
			<h1 className="text-md text-black">{props.name}</h1>
		</div>
		</>
	);
};

export const CastSlider = () => {
	const pics = [
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/joel-kinnaman-24386-24-03-2017-13-51-48.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/taika-waititi-1072843-24-03-2017-13-17-01.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sylvester-stallone-2319-24-03-2017-12-33-41.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/david-dastmalchian-1057599-24-03-2017-16-17-48.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/idris-elba-845-24-03-2017-12-41-49.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/michael-rooker-4646-01-05-2017-13-37-36.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/alice-braga-4067-12-09-2017-04-51-01.jpg",
	];

	const names = [
		"Margot Robbie",
		"Joel Kinnaman",
		"Taika Waititi",
		"Sylvester Stallone",
		"David Dastmalchian",
		"Idris Elba",
		"Michael Rooker",
		"Alice Braga",
	];

	return (
		<>
			<Slider {...settings}>
				{pics.map((pic, index) => (
					<CastCrew src={pic} name={names[index]} />
				))}
			</Slider>
		</>
	);
};

export const CrewSlider = () => {
	const pics = [
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/james-gunn-907-18-04-2017-16-21-51.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/charles-roven-iein004688-24-03-2017-13-00-25.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/peter-safran-iein073329-24-03-2017-16-31-24.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/john-murphy-iein007982-24-03-2017-13-54-33.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/walter-hamada-iein072734-14-08-2017-14-38-38.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-braham-iein018514-24-03-2017-16-43-19.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/fred-raskin-iein011662-13-04-2017-23-43-59.jpg",
	];

	const names = [
		"James Gunn",
		"Charles Roven",
		"Peter Safran",
		"John Murphy",
		"Walter Hamada",
		"Henry Braham",
		"Fred Raskin",
	];

	return (
		<>
			<Slider {...settings}>
				{pics.map((pic, index) => (
					<CastCrew src ={pic} name={names[index]} />
				))}
			</Slider>
		</>
	);
};