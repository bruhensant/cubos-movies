import { toast } from "sonner";
import { Endpoint } from "./app.types";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3/';

const headers = {
	accept: 'application/json',
	Authorization: `Bearer ${TMDB_API_KEY}`,
};

function getEntites<T>(endpoint: Endpoint, params?: { [key: string]: any }): Promise<T> {

	const definedParams = {
		language: 'pt-BR',
		append_to_response: 'videos',
		...params
	}

	return fetch(`${API_URL}${endpoint}${`?${new URLSearchParams(definedParams)}`}`, {
		method: 'GET',
		headers,
	})
		.then(res => res.json())
		.then((data) => data)
		.catch(err => {
			console.error(err);
			return [];
		});
};

function getEntitiesWithPagination<T>(endpoint: Endpoint, params?: { [key: string]: any }): Promise<{
	results: T[];
	page: number;
	total_pages: number;
	total_results: number;
}> {
	const definedParams = {
		language: 'pt-BR',
		append_to_response: 'videos',
		...params
	}

	return fetch(`${API_URL}${endpoint}${`?${new URLSearchParams(definedParams)}`}`, {
		method: 'GET',
		headers,
	})
		.then(res => res.json())
		.then((data) => {
			return {
				results: data.results.splice(0,10) || [],
				page: data.page || 1,
				total_pages: data.total_pages || 1,
				total_results: data.total_results || 0
			}
		})
		.catch(err => {
			console.error(err);
			toast.error(err);
			return {
				results: [],
				page: 1,
				total_pages: 1,
				total_results: 0
			};
		});
};

function getEntity<T>(endpoint: Endpoint, id: number): Promise<T> {
	return fetch(`${API_URL}${endpoint}/${id}?language=pt-BR&append_to_response=videos`, {
		method: 'GET',
		headers,
	})
		.then(res => res.json())
		.then((data: T) => data)
		.catch(err => {
			console.error(err);
			toast.error(err)
			throw err;
		});

}

export { getEntites, getEntitiesWithPagination, getEntity };
