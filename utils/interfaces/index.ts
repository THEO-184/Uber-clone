export interface Properties {
	wikidata: string;
}

export interface Geometry {
	type: string;
	coordinates: number[];
}

export interface Context {
	id: string;
	short_code: string;
	wikidata: string;
	text: string;
}

export interface Feature {
	id: string;
	type: string;
	place_type: string[];
	relevance: number;
	properties: Properties;
	text: string;
	place_name: string;
	center: [number, number];
	geometry: Geometry;
	context: Context[];
}

export interface RootObject {
	type: string;
	query: string[];
	features: Feature[];
	attribution: string;
}

export interface carListType {
	imgUrl: string;
	service: string;
	multiplier: number;
}

export interface DistanceProps {
	pickUpX: number;
	pickUpY: number;
	dropOffX: number;
	dropOffY: number;
}

export interface Admin {
	iso_3166_1_alpha3: string;
	iso_3166_1: string;
}

export interface Leg {
	via_waypoints: any[];
	admins: Admin[];
	weight: number;
	duration: number;
	steps: any[];
	distance: number;
	summary: string;
}

export interface Route {
	country_crossed: boolean;
	weight_name: string;
	weight: number;
	duration: number;
	distance: number;
	legs: Leg[];
	geometry: string;
}

export interface Waypoint {
	distance: number;
	name: string;
	location: number[];
}

export interface DistanceData {
	routes: Route[];
	waypoints: Waypoint[];
	code: string;
	uuid: string;
}
