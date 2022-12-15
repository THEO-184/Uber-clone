import React from "react";
import Map from "../components/Map";

const Confirm = () => {
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
