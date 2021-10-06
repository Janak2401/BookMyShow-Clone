import React from 'react';
import { BiChevronRight,BiSearch,BiMenu } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

const NavSm = () => {
	return (
		<>
			<div className="text-white flex items-center justify-between">
				<div>
					<h3 className="text-xl font-bold">It all starts here!</h3>
					<span className="text-gray-300 text-xs flex items-center">
						Nagpur
						<BiChevronRight />
					</span>
				</div>
				<div className="w-7 h-7">
					<BiSearch className="w-full h-full" />
				</div>
			</div>
		</>
	)
};

const NavMd = () => {
	return (
		<>
			<div className="w-full flex items-center bg-white gap-3 px-2 py-1 rounded-sm">
				<BiSearch />
				<input type="search" className="w-full focus:outline-none" placeholder="Search for movies, shows and events"/>
			</div>
		</>
	)
};

const NavLg = () => {
	return (
		<div className="container mx-auto flex items-center justify-around">
			<div className="flex items-center gap-2 w-1/2">
				<div className="w-12 h-12">
					<img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="logo" className="w-full h-full" />
				</div>
				<div className="w-full flex items-center bg-white gap-3 px-2 py-1 rounded-sm">
					<BiSearch />
					<input type="search" className="w-full focus:outline-none" placeholder="Search for movies, shows and events"/>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<span className="text-gray-300 text-xs flex items-center hover:text-white cursor-pointer">
					Thane
					<FiChevronDown />
				</span>
				<button className="text-white text-sm bg-red-600 rounded p-1">Sign In</button>
				<BiMenu className="text-white w-8 h-8"/>
			</div>
		</div>
	)
};

const Navbar = () => {
	return (
		<>
		<nav className="bg-navcol-700 p-4">
			<div className="md:hidden">{
				// Mobile Screen
				<NavSm />
			}</div>

			<div className="hidden lg:hidden md:flex">{
				// Tablet Screen
				<NavMd />
			}</div>

			<div className="hidden lg:flex">{
				// Desktop Screen
				<NavLg />
			}</div>
		</nav>
		</>
	);
};

export default Navbar;