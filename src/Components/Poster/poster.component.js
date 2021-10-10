import React from 'react';
import { BsStarFill } from 'react-icons/bs';

// props -> src, title, subtitle, isDark(bool)
const Poster = (props) => {
	return (
		<>
			<div className="flex flex-col items-start gap-1">
				<div className="h-96 pr-6">
					<img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
					alt={props.original_title} className="w-full h-full rounded-xl" />
				</div>

				<h3 className={`text-lg font-bold ${
					props.isDark ? "text-white" : "text-gray-700"
				}`}>{props.isTitle ? props.title : props.name}</h3>

				<div className="flex gap-2 items-center">
					<BsStarFill className="text-yellow-300" />
					<p className={`text-sm font-bold ${
						props.isDark ? "text-white" : "text-gray-700"
					}`}>{props.vote_average}</p>
				</div>
			</div>
		</>
	)
};

export default Poster;