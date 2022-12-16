import React from "react";
import Map from "../components/Map";
import { useGetCoordinates } from "../utils/hooks";

const Confirm = () => {
	const { coordinates } = useGetCoordinates("Ashaiman");
	console.log("coordinates", coordinates);
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-1">
				<Map />
			</div>
			<div className="flex-1 bg-blue-400">confirm locations</div>
		</div>
	);
};

export default Confirm;
