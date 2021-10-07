import React from 'react';
import Poster from '../Components/Poster/poster.component';
import Filter from '../Components/PlaysFilter/filter.component';

const PlaysPage = () => {
	return (
		<>
		<div className="container mx-auto px-4 py-10 bg-gray-100">
			<div className="w-full lg:flex lg:flex-row-reverse gap-12">
				<div className="lg:w-8/12">
					<h2 className="text-2xl text-gray-800 font-bold mb-4">Plays in Nagpur</h2>
					<div className="flex flex-wrap">
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
						<div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
							<Poster
								src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315142-leqnjzllbt-portrait.jpg"
								title="Dum Biryani"
								subtitle="English"
							/>
						</div>
					</div>
				</div>

				<div className="lg:w-1/5">
					<h2 className="text-2xl text-gray-800 font-bold mb-4">Filters</h2>
					<div>
						<Filter title="Date" tags={["Today","Tomorrow","Sunday"]}/>
						<Filter title="Language" tags={["English","Hindi","Marathi"]}/>
						<Filter title="Categories" tags={["Theatre","Interactive Theatre"]}/>
						<Filter title="Genres" tags={["Drama","Comedy"]}/>
						<Filter title="More Filters" tags={["Online Streaming","Outdoor Events"]}/>
						<Filter title="Price" tags={["Free","1-500","501-2000","Above 2000"]}/>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default PlaysPage;