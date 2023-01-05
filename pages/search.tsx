import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import SearchLocation from "../components/SearchLocation";
import BackBtn from "../components/Buttons";

export type onChangeEventType = React.ChangeEventHandler<HTMLInputElement>;

const Search = () => {
	const [pickupLocation, setPickupLocation] = useState("");
	const [dropOffLocation, setdropOffLocation] = useState("");

	const handleSetPickupLocation: onChangeEventType = (e) => {
		setPickupLocation(e.target.value);
	};
	const handleSetDropOffLocation: onChangeEventType = (e) => {
		setdropOffLocation(e.target.value);
	};
	console.log("pickup", pickupLocation);
	return (
		<div className="h-screen w-fulll  bg-gray-200">
			<Head>
				<title>Search any location</title>
			</Head>
			<div className="cursor-pointer bg-white px-4">
				<BackBtn
					to="/"
					image="https://img.icons8.com/ios-filled/50/000000/left.png"
				/>
			</div>
			<SearchLocation
				handleSetDropOffLocation={handleSetDropOffLocation}
				handleSetPickupLocation={handleSetPickupLocation}
			/>
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

			<div className="bg-black text-white py-3 px-4 mt-2 mx-4  cursor-pointer">
				<Link
					className="text-center w-full block"
					href={{
						pathname: "/confirm",
						query: {
							pickup: pickupLocation,
							dropOff: dropOffLocation,
						},
					}}
				>
					Confirm Locations
				</Link>
			</div>
		</div>
	);
};

export default Search;
