import React from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
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
			></ReactMapGL>
		</>
	);
};

export default Map;
