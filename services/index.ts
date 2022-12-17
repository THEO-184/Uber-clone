import { RootObject } from "../utils/interfaces";

export async function fetchCoordinates(
	location: string
): Promise<RootObject | undefined> {
	try {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
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
