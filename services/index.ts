import { getPickUpDropOffCoordinates } from "../utils/functions";
import { DistanceData, DistanceProps, RootObject } from "../utils/interfaces";

const baseUrl = process.env.NEXT_PUBLIC_MAPBOX_API as string;

export async function fetchCoordinates(
	location: string
): Promise<RootObject | undefined> {
	try {
		const response = await fetch(
			`${baseUrl}/geocoding/v5/mapbox.places/${location}.json?` +
				new URLSearchParams({
					access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN!,
					limit: "1",
				})
		);
		const coordinates = await response.json();
		return coordinates;
	} catch (error) {
		console.log("error", error);
	}
}

export async function fetchDistanceDuration({
	pickUpX,
	pickUpY,
	dropOffX,
	dropOffY,
}: DistanceProps): Promise<DistanceData | undefined> {
	try {
		const response = await fetch(
			`${baseUrl}/directions/v5/mapbox/driving/${pickUpX},${pickUpY};${dropOffX},${dropOffY}?` +
				new URLSearchParams({
					access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN!,
				})
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

export const getRideDetails = async (pickup: string, dropOff: string) => {
	const [pickUpCoords, dropOffCoords] = await Promise.all([
		fetchCoordinates(pickup),
		fetchCoordinates(dropOff),
	]);
	const { pickUpX, pickUpY, dropOffX, dropOffY } = getPickUpDropOffCoordinates(
		pickUpCoords,
		dropOffCoords
	);
	const distanceDurationResponse = await fetchDistanceDuration({
		pickUpX: pickUpX!,
		pickUpY: pickUpY!,
		dropOffX: dropOffX!,
		dropOffY: dropOffY!,
	});
	const duration =
		distanceDurationResponse &&
		distanceDurationResponse.routes[0]?.distance / 1000;
	return { pickUpCoords, dropOffCoords, duration };
};
