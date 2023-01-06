import { RootObject } from "./interfaces";

export const getPickUpDropOffCoordinates = (
	pickUpCoords: RootObject | undefined,
	dropOffCoords: RootObject | undefined
) => {
	const pickUpX = pickUpCoords && pickUpCoords.features[0].center[0];
	const pickUpY = pickUpCoords && pickUpCoords.features[0].center[1];
	const dropOffX = dropOffCoords && dropOffCoords.features[0].center[0];
	const dropOffY = dropOffCoords && dropOffCoords.features[0].center[1];
	return {
		pickUpX,
		pickUpY,
		dropOffX,
		dropOffY,
	};
};
