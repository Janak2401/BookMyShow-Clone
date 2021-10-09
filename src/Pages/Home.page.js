import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EntCardSlider from '../Components/Entertainment/Entertainment.component';
import Premiere from '../Components/Premiere/premiere.component';
import PosterSlider from '../Components/PosterSlider/posterSlider.component';
import premImages from '../Config/tempPosters.config';

const HomePage = () => {

	const [popularMovies, setPopularMovies] = useState([]);
	useEffect(() => {
		const reqPopularMovies = async () => {
			const getPopularMovies = await axios.get("/movie/popular");
			setPopularMovies(getPopularMovies.data.results);
		};
		reqPopularMovies();
	},[]);

	const [nowPlaying, setNowPlaying] = useState([]);
	useEffect(() => {
		const reqNowPlaying = async () => {
			const getNowPlaying = await axios.get("/movie/now_playing");
			setNowPlaying(getNowPlaying.data.results);
		};
		reqNowPlaying();
	},[]);

	const [upcomingMovies, setUpcomingMovies] = useState([]);
	useEffect(() => {
		const reqUpcomingMovies = async () => {
			const getUpcomingMovies = await axios.get("/movie/upcoming");
			setUpcomingMovies(getUpcomingMovies.data.results);
		};
		reqUpcomingMovies();
	},[]);

	const [topMovies, setTopMovies] = useState([]);
	useEffect(() => {
		const reqTopMovies = async () => {
			const getTopMovies = await axios.get("/movie/top_rated");
			setTopMovies(getTopMovies.data.results);
		};
		reqTopMovies();
	},[]);

	const [popularShows, setPopularShows] = useState([]);
	useEffect(() => {
		const reqPopularShows = async () => {
			const getPopularShows = await axios.get("/tv/popular");
			setPopularShows(getPopularShows.data.results);
		};
		reqPopularShows();
	},[]);

	const [topShows, setTopShows] = useState([]);
	useEffect(() => {
		const reqTopShows = async () => {
			const getTopShows = await axios.get("/tv/top_rated");
			setTopShows(getTopShows.data.results);
		};
		reqTopShows();
	},[]);

	return (
		<>
		<div className="flex flex-col gap-10 bg-gray-200">
			<div className="container mx-auto px-24 my-12">
				<h1 className="text-black font-bold text-2xl px-2 py-4">The Best of Entertainment</h1>
				<EntCardSlider />
			</div>

			<div className="bg-navcol-200 py-6 my-12">
				<div className="container mx-auto px-24">
					<div className="flex">
						<img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
						alt="RuPay" className="w-full h-full" />
					</div>
					<PosterSlider images={popularMovies} title="Premieres" subtitle="Brand new releases every Friday" isDark/>
				</div>
			</div>

			<div className="container mx-auto px-24 my-6">
				<PosterSlider 
				images={nowPlaying}
				title="Now Playing"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24 my-6">
				<PosterSlider 
				images={upcomingMovies}
				title="Upcoming Movies"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24 my-6">
				<PosterSlider 
				images={topMovies}
				title="Top Rated Movies"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24 my-6">
				<PosterSlider 
				images={popularShows}
				title="Popular TV Shows"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24 my-6">
				<PosterSlider 
				images={topShows}
				title="Top Rated TV Shows"
				isDark={false}/>
			</div>
		</div>
		</>
	);
};

export default HomePage;