import React from 'react';
import Slider from 'react-slick';

// Poster component
import Poster from '../Poster/poster.component';

// Poster Carousal and Images config js
import settings from '../../Config/posterCarousal.config';
import premImages from '../../Config/tempPosters.config';

const Premiere = () => {
	return (
		<>
			<div className="flex flex-col items-start py-4">
				<h3 className="text-white text-xl font-bold">Premieres</h3>
				<p className="text-white text-sm">Brand new releases every Friday</p>
			</div>

			<Slider {...settings}>
				{premImages.map((image) => (
					<Poster {...image} isDark />
				))}
			</Slider>
		</>
	);
};

export default Premiere;