import React from 'react';
import { GrGithub,GrYoutube,GrInstagram,GrLinkedin,GrFacebook,GrTwitter } from 'react-icons/gr';

const Footer = () => {
	return (
		<>
			<footer className="bg-navcol-600 h-96 flex flex-col justify-evenly">
				<h1 className="text-gray-200 text-xl text-center">This is a BookMyShow Clone made during ShapeAI training program</h1>
				<h1 className="text-gray-200 text-lg text-center">Made by Janak Khorgade</h1>
				<h1 className="text-gray-200 text-lg text-center">Guided by Mentor: Aradhana Kund</h1>
				<div className="flex items-center justify-evenly">
					<hr className="w-2/5" />
					<div className="w-32 h-12">
						<img 
							src="https://in.bmscdn.com/webin/common/icons/logo.svg" 
							alt="logo" 
							className="w-full h-full fill-current text-navcol-200" 
						/>
					</div>
					<hr className="w-2/5" />
				</div>

				<div className="flex items-center w-1/4 mx-auto justify-evenly text-4xl">
					<GrGithub className="text-gray-400 hover:text-white cursor-pointer" 
						onClick={() => window.open("https://github.com/Janak2401")}
					/>
					<GrLinkedin className="text-gray-400 hover:text-white cursor-pointer" 
						onClick={() => window.open("https://www.linkedin.com/in/janak-khorgade-513b621a2/")}
					/>
					<GrYoutube className="text-gray-400 hover:text-white cursor-pointer" 
						onClick={() => window.open("https://www.youtube.com/channel/UCppkeDWjTC7XI9r_8-dPv3g")}
					/>
					<GrInstagram className="text-gray-400 hover:text-white cursor-pointer" 
						onClick={() => window.open("https://www.instagram.com/janak_k2401/")}
					/>
					<GrFacebook className="text-gray-400 hover:text-white cursor-pointer" 
						onClick={() => window.open("https://www.facebook.com/profile.php?id=100010229077075")}
					/>
					<GrTwitter className="text-gray-400 hover:text-white cursor-pointer" 
						onClick={() => window.open("https://twitter.com/JanakKhorgade")}
					/>
				</div>
			</footer>
		</>
	)
};

export default Footer;