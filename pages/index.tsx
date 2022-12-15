import Map from "../components/Map";
import ActionItems from "../components/ActionItems";
import Head from "next/head";

export default function Home() {
	return (
		<div className="h-screen flex flex-col">
			<Head>
				<title>Tours</title>
			</Head>
			<div className="flex-1">
				<Map />
			</div>
			<div className="flex-1  p-4">
				<ActionItems />
			</div>
		</div>
	);
}
