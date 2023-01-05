import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
	to: string;
	image: string;
}

const BackBtn = ({ to, image }: Props) => {
	return (
		<Link href={to}>
			<Image alt="backBtn" src={image} width="32" height={"32"} className="" />
		</Link>
	);
};

export default BackBtn;
