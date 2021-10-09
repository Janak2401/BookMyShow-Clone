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
			<h1 className="text-md">Margot Robbie</h1>
		</div>
		</>
	);
};

const CastCrewSlider = () => {
	const pics = [
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
		"https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg"
	];

	return (
		<>
			<Slider {...settings}>
				{pics.map((pic) => (
					<CastCrew src ={pic} />
				))}
			</Slider>
		</>
	);
};

export default CastCrewSlider;