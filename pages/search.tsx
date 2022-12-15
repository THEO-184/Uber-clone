import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

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
			<div className="bg-white flex items-center px-4 mb-2">
				<div className="w-10 flex flex-col items-center">
					<div className="relative block w-2 h-2">
						<Image
							alt="circle"
							src={"https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"}
							fill
							className="object-cover"
						/>
					</div>

					<Image
						alt="circle"
						src={"https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"}
						width="30"
						height={"100"}
						className="object-contain text-left"
					/>

					<div className="relative block w-2 h-2">
						<Image
							alt="circle"
							src={"https://img.icons8.com/windows/50/000000/square-full.png"}
							fill
							className="object-contain"
						/>
					</div>
				</div>

				<div className="flex-1 flex flex-col">
					<input
						type="text"
						className="h-10 bg-gray-200 my-2 outline-none p-2 rounded-sm"
						placeholder="Enter pickup location"
					/>
					<input
						type="text"
						className="h-10 bg-gray-200 my-2 outline-none p-2 rounded-sm"
						placeholder="Where to?"
					/>
				</div>
				<div className="plus-icon relative block w-7 h-7 sm:w-10 sm:h-10 ml-2">
					<Image
						alt="circle"
						src={"https://img.icons8.com/windows/50/000000/plus-math.png"}
						fill
						className="object-contain text-left bg-gray-200 rounded-full p-1"
					/>
				</div>
			</div>
		</div>
	);
};

export default Search;
