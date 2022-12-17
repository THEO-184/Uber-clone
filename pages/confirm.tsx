import React from "react";
import Map from "../components/Map";
import { useGetCoordinates } from "../utils/hooks";

const Confirm = () => {
	const { coordinates: pickUpCoordinates } = useGetCoordinates("Ashaiman");
	const { coordinates: dropOffCoordinates } = useGetCoordinates("Teshie");
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-1">
				<Map
					pickupCoordinates={pickUpCoordinates?.features[0].center}
					dropofCoordinates={dropOffCoordinates?.features[0].center}
				/>
			</div>
			<div className="flex-1 bg-blue-400">confirm locations</div>
		</div>
	);
};

export default Confirm;
