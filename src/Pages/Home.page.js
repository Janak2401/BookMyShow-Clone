import React from 'react';
import EntCardSlider from '../Components/Entertainment/Entertainment.component';
import Premiere from '../Components/Premiere/premiere.component';
import PosterSlider from '../Components/PosterSlider/posterSlider.component';
import premImages from '../Config/tempPosters.config';

const HomePage = () => {
	return (
		<>
		<div className="flex flex-col gap-10">
			<div className="container mx-auto px-24">
				<h1 className="text-black font-bold text-2xl">The Best of Entertainment</h1>
				<EntCardSlider />
			</div>

			<div className="bg-navcol-200 py-6">
				<div className="container mx-auto px-24">
					<div className="flex">
						<img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
						alt="RuPay" className="w-full h-full" />
					</div>
					<PosterSlider images={premImages} title="Premieres" subtitle="Brand new releases every Friday" isDark/>
				</div>
			</div>

			<div className="container mx-auto px-24">
				<PosterSlider 
				images={premImages}
				title="Online Streaming Events"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24">
				<PosterSlider 
				images={premImages}
				title="Outdoor Events"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24">
				<PosterSlider 
				images={premImages}
				title="Laughter Therapy"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24">
				<PosterSlider 
				images={premImages}
				title="Popular Events"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24">
				<PosterSlider 
				images={premImages}
				title="Top Games & Sport Events"
				isDark={false}/>
			</div>
			
			<div className="container mx-auto px-24">
				<PosterSlider 
				images={premImages}
				title="Explore Fun Activities"
				isDark={false}/>
			</div>
		</div>
		</>
	);
};

export default HomePage;