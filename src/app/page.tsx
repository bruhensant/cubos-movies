'use client';

import MovieCard from "@/components/elements/movie-card";
import { Paginator } from "@/components/elements/paginator";
import { SearchBox } from "@/components/elements/search-box";
import { Endpoint, Movie, PaginationInfo } from "@/lib/app.types";
import { getEntitiesWithPagination } from "@/lib/tmdb.service";
import { useEffect, useState } from "react";

export default function Home() {

	const [movies, setMovies] = useState<Movie[]>([]);
	const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
		page: 1,
		total_pages: 1,
		total_results: 0
	});
	const [lastSearch, setLastSearch] = useState({
		page: 1,
		endpoint: Endpoint.WEEKLY_TRENDING_MOVIES,
		query: ''
	});

	useEffect(() => {
		getEntitiesWithPagination<Movie>(Endpoint.WEEKLY_TRENDING_MOVIES).then(data => {
			setMovies(data.results);
			setPaginationInfo({
				page: data.page,
				total_pages: data.total_pages,
				total_results: data.total_results
			});
		});

	}, []);

	function handleSearch(query: string) {
		if(query === ''){
			setLastSearch({
				...lastSearch,
				endpoint: Endpoint.WEEKLY_TRENDING_MOVIES,
				query: '',
				page: 1
			});

			getEntitiesWithPagination<Movie>(Endpoint.WEEKLY_TRENDING_MOVIES).then(data => {
				setMovies(data.results);
				setPaginationInfo({
					page: data.page,
					total_pages: data.total_pages,
					total_results: data.total_results
				});
			});

			return;
		};

		setLastSearch({
			...lastSearch,
			endpoint: Endpoint.SEARCH_MOVIES,
			query: query,
			page: 1
		});

		getEntitiesWithPagination<Movie>(Endpoint.SEARCH_MOVIES, { query }).then(data => {
			setMovies(data.results);
			setPaginationInfo({
				page: data.page,
				total_pages: data.total_pages,
				total_results: data.total_results
			});
		});
	}

	function handlePageChange(page: number) {
		const searchParams: any = { page };
		
		if (lastSearch.endpoint === Endpoint.SEARCH_MOVIES && lastSearch.query) {
			searchParams.query = lastSearch.query;
		}

		setLastSearch({
			...lastSearch,
			page
		});

		getEntitiesWithPagination<Movie>(lastSearch.endpoint, searchParams).then(data => {
			setMovies(data.results);
			setPaginationInfo({
				page: data.page,
				total_pages: data.total_pages,
				total_results: data.total_results
			});
		});
	}

	return (
		<div className="font-sans flex flex-col gap-8 w-full">

			<div className="flex flex-col gap-2">

				<SearchBox searchFn={handleSearch} setMovies={setMovies} /> 

				<div className="w-full grid bg-mauve-alpha-3 backdrop-blur-xs grid-cols-2 
					md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-4 p-4 sm:gap-6 sm:p-6 rounded-md">

					{
						movies.length > 0 ? (
							movies?.map((movie) => (
								<MovieCard key={movie.id} movieData={movie} />
							))
						) : (
							<p>Nenhum filme encontrado.</p>
						)
					}

				</div>
			</div>

			<Paginator
				currentPage={paginationInfo.page}
				totalPages={paginationInfo.total_pages}
				onPageChange={handlePageChange}
			/>

		</div>
	);
}
