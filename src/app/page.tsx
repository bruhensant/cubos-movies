'use client';

import MovieCard from "@/components/elements/movie-card";
import { Paginator } from "@/components/elements/paginator";
import { SearchBox } from "@/components/elements/search-box";
import { Endpoint, Movie } from "@/lib/app.types";
import { getEntites } from "@/lib/tmdb.service";
import { useEffect, useState } from "react";

export default function Home() {

	const [movies, setMovies] = useState<Movie[]>([]);
	const [lastSearch, setLastSearch] = useState({
		page: 1,
		endpoint: Endpoint.WEEKLY_TRENDING_MOVIES
	});

	console.warn('aa');

	useEffect(() => {
		getEntites<Movie>(Endpoint.WEEKLY_TRENDING_MOVIES).then(data => {
				setMovies(data);
			});

	}, []);

	function handleSearch(query: string) {
		if(query === ''){
			setLastSearch({
			...lastSearch,
			endpoint: Endpoint.WEEKLY_TRENDING_MOVIES
		});

			getEntites<Movie>(Endpoint.WEEKLY_TRENDING_MOVIES).then(data => {
				setMovies(data);
			});

			return;
		};

		setLastSearch({
			...lastSearch,
			endpoint: Endpoint.SEARCH_MOVIES
		});

		getEntites<Movie>(Endpoint.SEARCH_MOVIES, { query }).then(data => {
			setMovies(data);
		});
	}

	function handlePageChange(page: number, endpoint?: Endpoint) {
		getEntites<Movie>(endpoint || lastSearch.endpoint, { page }).then(data => {
			setMovies(data);
		});
	}

	return (
		<div className="font-sans flex flex-col gap-8 min-h-screen w-full">

			<div className="flex flex-col gap-2">

				<SearchBox searchFn={handleSearch} /> 

				<div className="w-full grid bg-mauve-alpha-3 backdrop-blur-xs grid-cols-2 
					md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-4 p-4 sm:gap-6 sm:p-6 rounded-md">

					{
						movies.length > 0 ? (

							movies?.map((movie) => (
								<MovieCard key={movie.title} movieData={movie} />
							))
						) : (
							<p>Nenhum filme encontrado.</p>
						)
					}

				</div>
			</div>

			<Paginator moveFn={handlePageChange} previousPage={lastSearch.page > 1 ? lastSearch.page - 1 : 1} nextPage={lastSearch.page + 1} />

		</div>
	);
}
