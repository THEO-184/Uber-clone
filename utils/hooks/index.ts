import { useEffect, useState } from "react";
import { fetchCoordinates, fetchDistanceDuration } from "../../services";
import { DistanceProps, RootObject } from "../interfaces";

export const useGetCoordinates = (location: string) => {
	const [coordinates, setCoordinates] = useState<RootObject>();
	const getCoordinates = async () => {
		const response = await fetchCoordinates(location);
		if (response) {
			setCoordinates(response);
		}
	};

	useEffect(() => {
		if (location) {
			getCoordinates();
		}
	}, [location]);

	return { coordinates };
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
