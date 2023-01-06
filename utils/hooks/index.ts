import { useEffect, useState } from "react";
import { fetchCoordinates, fetchDistanceDuration } from "../../services";
import { DistanceProps, RootObject } from "../interfaces";

export const useGetCoordinates = (pickUp: string, dropOff: string) => {
	const [coordinates, setCoordinates] = useState<[RootObject, RootObject]>();
	const [isLoading, setIsLoading] = useState(false);
	const [duration, setDuration] = useState<number>(0);

	const getCoordinates = async () => {
		setIsLoading(true);
		const [pickUpCoords, dropOffCoords] = await Promise.all([
			fetchCoordinates(pickUp),
			fetchCoordinates(dropOff),
		]);
		if (pickUpCoords && dropOffCoords) {
			setCoordinates([pickUpCoords, dropOffCoords]);
		}
		const pickUpX = pickUpCoords && pickUpCoords.features[0].center[0];
		const pickUpY = pickUpCoords && pickUpCoords.features[0].center[1];
		const dropOffX = dropOffCoords && dropOffCoords.features[0].center[0];
		const dropOffY = dropOffCoords && dropOffCoords.features[0].center[1];

		const distanceDurationResponse = await fetchDistanceDuration({
			pickUpX: pickUpX!,
			pickUpY: pickUpY!,
			dropOffX: dropOffX!,
			dropOffY: dropOffY!,
		});
		setIsLoading(false);
		if (distanceDurationResponse) {
			setDuration(distanceDurationResponse?.routes[0]?.distance / 1000);
		}
	};

	useEffect(() => {
		getCoordinates();
	}, [pickUp, dropOff]);

	return { coordinates, isLoading, duration };
};

export const useGetDistanceDuration = ({
	pickUpX,
	pickUpY,
	dropOffX,
	dropOffY,
}: DistanceProps) => {
	const [duration, setDuration] = useState<number>(0);

	const getDistance = async () => {
		const response = await fetchDistanceDuration({
			pickUpX,
			pickUpY,
			dropOffX,
			dropOffY,
		});
		if (response) {
			setDuration(response?.routes[0]?.distance / 1000);
		}
	};

	useEffect(() => {
		getDistance();
	}, [pickUpX, pickUpY, dropOffX, dropOffY]);

	return { duration };
};
