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
