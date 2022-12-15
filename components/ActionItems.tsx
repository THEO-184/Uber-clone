import Image from "next/image";
import React from "react";
import Link from "next/link";

const ActionItems = () => {
	return (
		<>
			{/* HEADER */}
			<div className="flex justify-between items-center">
				<Image
					alt="logo"
					src={"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}
					width={112}
					height={112}
				/>
				<div className="flex items-center">
					<p className="mr-4 text-sm">Theo Boakye</p>
					<Image
						src={"/images/my_profile.jpeg"}
						width="32"
						height={"32"}
						alt="profileImg"
						className="rounded-full w-14 h-14 border border-gray-200 p-px object-cover"
					/>
				</div>
			</div>
			{/* ACTION BTNS */}

			<div className="my-2 flex text-center">
				<Link href={"/search"} className="card">
					<div className="">
						<Image
							src={"https://i.ibb.co/cyvcpfF/uperx.png"}
							alt="ride"
							width={"20"}
							height="20"
							className="w-12 h-12 object-cover"
						/>

						<p>Ride</p>
					</div>
				</Link>
				<div className="card">
					<Image
						src={"https://i.ibb.co/n776JLm/bike.png"}
						alt="ride"
						width={"20"}
						height="20"
						className="w-12 h-12 object-cover"
					/>
					<p>Wheels</p>
				</div>
				<div className="card">
					<Image
						src={"https://i.ibb.co/5RjchBg/uberschedule.png"}
						alt="ride"
						width={"20"}
						height="20"
						className="w-12 h-12 object-cover"
					/>
					<p>Reserve</p>
				</div>
			</div>

			{/* INPUT */}

			<div className="bg-gray-200 h-20 mt-8 flex items-center p-4 rounded-lg text-2xl m-2">
				Where to?
			</div>
		</>
	);
};

export default ActionItems;
