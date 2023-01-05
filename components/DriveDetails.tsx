import Image from "next/image";
import React from "react";

interface Props {
	image: string;
	title: string;
	time: string;
	price: number;
}

const DriveDetails = ({ image, title, time, price }: Props) => {
	return (
		<div className="flex p-4 items-center flex-1">
			<div className="flex-1 flex items-center">
				<Image
					src={image}
					width={"40"}
					height={"40"}
					className="object-cover mr-3"
					alt="car"
				/>
				<div className="flex flex-col">
					<p className="font-bold">{title}</p>
					<p className="text-sm text-blue-500">{time}</p>
				</div>
			</div>
			<p className="text-black font-bold">${price}</p>
		</div>
	);
};

export default DriveDetails;
