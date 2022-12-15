import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="w-screen max-w-screen-sm mx-auto my-2">{children}</div>
	);
};

export default Layout;
