import React from "react";
import Map from "../components/Map";
import { useRouter } from "next/router";
import { useGetCoordinates } from "../utils/hooks";
import Image from "next/image";
import DriveDetails from "../components/DriveDetails";
import { carList } from "../utils/constants";

const Confirm = () => {
	const { query } = useRouter();
	const { pickup, dropOff } = query;

	const { coordinates: pickUpCoordinates } = useGetCoordinates(
		pickup as string
	);
	const { coordinates: dropOffCoordinates } = useGetCoordinates(
		dropOff as string
	);
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-1">
				<Map
					pickupCoordinates={pickUpCoordinates?.features[0]?.center}
					dropofCoordinates={dropOffCoordinates?.features[0]?.center}
				/>
			</div>
			<div className="flex-1 flex flex-col bg-white">
				<div className="flex-1">
					<p className="text-center text-gray-500 py-2 border-b-2 text-sm">
						Choose a ride, or swipe up for more.
					</p>
					<div className="flex flex-col">
						{carList.map((car, id) => {
							const { imgUrl, multiplier, service } = car;
							return (
								<DriveDetails
									image={imgUrl}
									price={20.32}
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
