import React from "react";
import Map from "../components/Map";
import { useRouter } from "next/router";
import { useGetCoordinates, useGetDistanceDuration } from "../utils/hooks";
import DriveDetails from "../components/DriveDetails";
import { carList } from "../utils/constants";
import BackBtn from "../components/Buttons";

const Confirm = () => {
	const { query } = useRouter();
	const { pickup, dropOff } = query;

	const { coordinates: pickUpCoords } = useGetCoordinates(pickup as string);
	const { coordinates: dropOfCoords } = useGetCoordinates(dropOff as string);
	const pickUpCoordinates = pickUpCoords?.features[0]?.center!;
	const dropOffCoordinates = dropOfCoords?.features[0]?.center!;
	const { duration } = useGetDistanceDuration({
		pickUpX: pickUpCoordinates && pickUpCoordinates[0],
		pickUpY: pickUpCoordinates && pickUpCoordinates[1],
		dropOffX: dropOffCoordinates && dropOffCoordinates[0],
		dropOffY: dropOffCoordinates && dropOffCoordinates[1],
	});

	return (
		<div className="flex flex-col h-screen ">
			<div className="flex-1 relative">
				<Map
					pickupCoordinates={pickUpCoordinates}
					dropofCoordinates={dropOffCoordinates}
				/>
				<div className="w-8 h-8 rounded-full bg-white absolute flex items-center justify-center p-1 left-4 top-4 shadow-md">
					<BackBtn
						to="/search"
						image="https://img.icons8.com/ios-filled/50/000000/left.png"
					/>
				</div>
			</div>
			<div className="flex-1 flex flex-col bg-white overflow-y-scroll">
				<div className="flex-1">
					<p className="text-center text-gray-500 py-2 border-b-2 text-sm">
						Choose a ride, or swipe up for more.
					</p>
					<div className="flex flex-col overflow-y-scroll flex-1">
						{carList.map((car, id) => {
							const { imgUrl, multiplier, service } = car;
							return (
								<DriveDetails
									image={imgUrl}
									price={(duration * multiplier).toFixed(2)}
									time={`${5 * multiplier} min away`}
									title={service}
									key={id}
								/>
							);
						})}
					</div>
				</div>
				<div className="text-white text-center border-t-2  w-full">
					<button className="bg-black py-4 w-11/12 mx-auto my-2">
						Confirm UberX
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
