import { useEffect, useState } from "react";
import { fetchCoordinates } from "../../services";
import { RootObject } from "../interfaces";

export const useGetCoordinates = (location: string) => {
	const [coordinates, setCoordinates] = useState<RootObject>();
	const getCoordinates = async () => {
		const response = await fetchCoordinates(location);
		if (response) {
			setCoordinates(response);
		}
	};

	useEffect(() => {
		getCoordinates();
	}, []);

	return { coordinates };
};
