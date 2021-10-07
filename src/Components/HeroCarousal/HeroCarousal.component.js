import React, {useState, useEffect} from 'react';
import HeroSlider from 'react-slick';
import axios from 'axios';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow component
import {NextArrow, PrevArrow} from "./Arrows.component";

const HeroCarousal = () => {

	const [images, setImages] = useState([]);

	useEffect(() => {
		const reqNowPlaying = async() => {
			const getImages = await axios.get("/movie/now_playing");
			setImages(getImages.data.results);
		};
		reqNowPlaying();
	}, []);

	const settingsLg = {
		arrows:true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
	};

	const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

	return (
		<>
			<div className="lg:hidden">
				<HeroSlider {...settings}>
					{
						images.map((image) => (
							<div className="w-full h-64 md:64 py-3">
								<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
								alt="landscape" className="w-full h-full" />
							</div>
						))
					}
				</HeroSlider>
			</div>

			<div className="hidden lg:block">
				<HeroSlider {...settingsLg}>
					{
						images.map((image) => (
							<div className="w-full h-96 px-2 py-3">
								<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
								alt="landscape" className="w-full h-full rounded-md" />
							</div>
						))
					}
				</HeroSlider>
			</div>
		</>
	);
};

export default HeroCarousal;