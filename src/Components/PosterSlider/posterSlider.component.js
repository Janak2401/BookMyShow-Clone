import React from 'react';
import Poster from '../Poster/poster.component';
import settings from '../../Config/posterCarousal.config';
import Slider from 'react-slick';

const PosterSlider = (props) => {
	return (
		<>
			<div className="flex flex-col items-start py-4">
				<h3 className={`text-xl font-bold ${
					props.isDark ? "text-white" : "text-gray-700"
				}`}>{props.title}</h3>

				<p className={`text-sm ${
					props.isDark ? "text-white" : "text-gray-700"
				}`}>{props.subtitle}</p>
			</div>

			<Slider {...settings}>
				{props.images.map((image) => (
					<Poster {...image} isDark={props.isDark} isTitle={props.isTitle}/>
				))}
			</Slider>
		</>
	);
};

export default PosterSlider;