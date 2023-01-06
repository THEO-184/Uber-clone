import Image from "next/image";
import React from "react";

const Login = () => {
	return (
		<div className="h-screen bg-gray-200 flex flex-col p-4">
			<Image
				src={"https://i.ibb.co/ZMhy8ws/uber-logo.png"}
				alt="uber_logo"
				width={"45"}
				height="45"
			/>
			<button className="bg-black py-4 px-6 text-center  text-white">
				Sign in with Google
			</button>
		</div>
	);
};

export default Login;
