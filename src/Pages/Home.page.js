import React from 'react';
import EntCardSlider from '../Components/Entertainment/Entertainment.component';

const HomePage = () => {
	return (
		<>
			<div className="container mx-auto px-4">
				<h1 className="text-black font-bold text-2xl">The Best of Entertainment</h1>
				<EntCardSlider />
			</div>
		</>
	);
};

export default HomePage;