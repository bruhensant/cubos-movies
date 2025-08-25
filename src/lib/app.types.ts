// Movie - defines a item movie on IMDB API
export type Movie = {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export enum Endpoint {
	WEEKLY_TRENDING_MOVIES = 'trending/movie/week',
	MOVIE_DETAILS = 'movie',
	SEARCH_MOVIES = 'search/movie'
}

// PaginationInfo - contains pagination metadata
export type PaginationInfo = {
	page: number;
	total_pages: number;
	total_results: number;
}

// FullMovie type
export type FullMovie = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	videos: {
		results: Video[];
	};
	vote_average: number;
	vote_count: number;
}

// BelongsToCollection type
export type BelongsToCollection = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

// Genre type
export type Genre = {
	id: number;
	name: string;
}

// ProductionCompany type
export type ProductionCompany = {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}

// ProductionCountry type
export type ProductionCountry = {
	iso_3166_1: string;
	name: string;
}

// SpokenLanguage type
export type SpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
}

// Video type
export type Video = {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: number
	type: string
	official: boolean
	published_at: string
	id: string
}
