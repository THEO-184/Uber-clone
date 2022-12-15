import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import SearchLocation from "../components/SearchLocation";

const Search = () => {
	return (
		<div className="h-screen w-fulll  bg-gray-200">
			<Head>
				<title>Search any location</title>
			</Head>
			<div className="cursor-pointer bg-white px-4">
				<Link href="/">
					<Image
						alt="backBtn"
						src={"https://img.icons8.com/ios-filled/50/000000/left.png"}
						width="32"
						height={"32"}
						className=""
					/>
				</Link>
			</div>
			<SearchLocation />
			<div className="bg-white flex items-center px-4 py-2">
				<div className="relative block w-10 h-10 mr-2">
					<Image
						alt="savedPlaces"
						src={"https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"}
						fill
						className="bg-gray-400 p-2 rounded-full"
					/>
				</div>
				<p>Saved Places</p>
			</div>

			<div className="bg-black text-white py-1 m-2 cursor-pointer">
				<button className="text-center w-full">Confirm Locations</button>
			</div>
		</div>
	);
};

export default Search;
