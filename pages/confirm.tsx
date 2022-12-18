import React from "react";
import Map from "../components/Map";
import { useRouter } from "next/router";
import { useGetCoordinates } from "../utils/hooks";

const Confirm = () => {
	const { query } = useRouter();
	const { pickup, dropOff } = query;
	console.log({ pickup, dropOff });

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
			<div className="flex-1 bg-blue-400">confirm locations</div>
		</div>
	);
};

export default Confirm;
