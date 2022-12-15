import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return <div className="max-w-screen-sm mx-auto h-screen">{children}</div>;
};

export default Layout;
