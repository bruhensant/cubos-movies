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
	WEEKLY_TRENDING_MOVIES = 'trending/movie/week'
}
