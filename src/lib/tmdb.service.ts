import { Endpoint, Movie } from "./app.types";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3/';

const headers = {
	accept: 'application/json',
	Authorization: `Bearer ${TMDB_API_KEY}`,
};

function getEntites<T>(endpoint: Endpoint, params?: {[key:string]: any}): Promise<T[]>{
	return fetch(`${API_URL}${endpoint}${params ? `?${new URLSearchParams(params)}` : ''}`, {
		method: 'GET',
		headers,
	})
	.then(res => res.json())
	.then((data:  {results: T[]} ) => data.results.splice(0, 10))
	.catch(err => {
		console.error(err);
		return [];
	});
};

export { getEntites };
