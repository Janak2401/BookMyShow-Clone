import React from 'react';
import HeroSlider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow component
import {NextArrow, PrevArrow} from "./Arrows.component";

const HeroCarousal = () => {

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
    slidesToScroll: 1
  };

  const images = [
  	"https://images.unsplash.com/photo-1514908135297-d8b4af35ee80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  	"https://images.unsplash.com/photo-1562374184-a71b175917b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  	"https://images.unsplash.com/photo-1540137779703-594db0107a4b?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTY0OTQzMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  	"https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  	"https://images.unsplash.com/photo-1545200381-89c298dea43d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTY0OTQzMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  ];

	return (
		<>
			<div className="lg:hidden">
				<HeroSlider {...settings}>
					{
						images.map((image) => (
							<div className="w-full h-64 md:64 py-3">
								<img src={image} alt="landscape" className="w-full h-full" />
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
								<img src={image} alt="landscape" className="w-full h-full rounded-md" />
							</div>
						))
					}
				</HeroSlider>
			</div>
		</>
	);
};

export default HeroCarousal;