import Image from "next/image";
import React, { useState } from "react";
import ReactMapGL, {
	Marker,
	Popup,
	ViewState,
	ViewStateChangeEvent,
} from "react-map-gl";

type Coordinates = [number, number];
interface Props<T> {
	pickupCoordinates?: T;
	dropofCoordinates?: T;
}

const Map = ({ pickupCoordinates, dropofCoordinates }: Props<Coordinates>) => {
	const [showPickUpPopUp, setShowPickUpPopUp] = useState(false);
	const [viewPort, setViewPort] = useState<
		Omit<ViewState, "bearing" | "padding" | "pitch">
	>({
		longitude: -0.205874,
		latitude: 5.614818,
		zoom: 10,
	});

	const handleViewState = (e: ViewStateChangeEvent) => {
		setViewPort({
			longitude: e.viewState.longitude,
			latitude: e.viewState.latitude,
			zoom: e.viewState.zoom,
		});
	};
	return (
		<>
			<ReactMapGL
				{...viewPort}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				style={{ width: "100%", height: "100%" }}
				boxZoom
				onMove={handleViewState}
				mapStyle={"mapbox://styles/mapbox/streets-v11"}
				initialViewState={{
					bounds:
						dropofCoordinates && pickupCoordinates
							? [pickupCoordinates, dropofCoordinates]
							: undefined,
				}}
			>
				{/* {showPickUpPopUp ? (
					<Popup
						latitude={5.692858}
						longitude={-0.029869}
						anchor="top-right"
						closeButton={false}
						closeOnClick
					>
						pickup
					</Popup>
				) : null} */}
				)
				{pickupCoordinates && pickupCoordinates?.length ? (
					<Marker
						latitude={pickupCoordinates[1]}
						longitude={pickupCoordinates[0]}
						offset={[10, 10]}
					>
						<Image
							alt="marker"
							src={"/images/marker-icon.png"}
							width="30"
							height={"30"}
							onMouseOver={() => setShowPickUpPopUp(true)}
							onMouseLeave={() => setShowPickUpPopUp(false)}
						/>
					</Marker>
				) : null}
				{dropofCoordinates && dropofCoordinates?.length ? (
					<Marker
						latitude={dropofCoordinates[1]}
						longitude={dropofCoordinates[0]}
						offset={[10, 10]}
					>
						<Image
							alt="marker"
							src={"/images/drop-off.png"}
							width="30"
							height={"30"}
						/>
					</Marker>
				) : null}
			</ReactMapGL>
		</>
	);
};

export default Map;
