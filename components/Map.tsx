import Image from "next/image";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = () => {
	const [showPopUp, setShowPopUp] = useState(false);

	return (
		<>
			<ReactMapGL
				initialViewState={{
					longitude: -0.205874,
					latitude: 5.614818,
					zoom: 10,
				}}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				style={{ width: "100%", height: "100%" }}
				boxZoom
				mapStyle={"mapbox://styles/mapbox/streets-v11"}
			>
				<Popup
					latitude={5.692858}
					longitude={-0.029869}
					anchor="top-right"
					closeButton={false}
					closeOnClick
				>
					I am pop up
				</Popup>
				)
				<Marker latitude={5.692858} longitude={-0.029869} offset={[10, 10]}>
					<Image
						alt="marker"
						src={"/images/marker-icon.png"}
						width="30"
						height={"30"}
					/>
				</Marker>
			</ReactMapGL>
		</>
	);
};

export default Map;
