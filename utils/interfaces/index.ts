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
