'use client'

import MovieCard from "@/components/elements/movie-card";
import { Paginator } from "@/components/elements/paginator";
import { SearchBox } from "@/components/elements/search-box";
import { Button } from "@/components/ui/button";
import { Endpoint, Movie } from "@/lib/app.types";
import { getEntites } from "@/lib/tmdb.service";
import { useEffect, useState } from "react";

export default function Home() {

	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		getEntites<Movie>(Endpoint.WEEKLY_TRENDING_MOVIES).
			then(data => {
				setMovies(data);
			});
	}, []);

	return (
		<div className="font-sans flex flex-col gap-8 min-h-screen w-full">

			<div className="flex flex-col gap-2">

				<SearchBox></SearchBox>

				<div className="w-full grid bg-mauve-alpha-3 backdrop-blur-xs
					grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
					xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-6 rounded-md p-6
					">

					{
						movies.map((movie) => (
							<MovieCard key={movie.title} movieData={movie} />
						))
					}

				</div>
			</div>

			<Paginator></Paginator>

			<Button onClick={() => getEntites(Endpoint.WEEKLY_TRENDING_MOVIES)}>
				Fetch Movies
			</Button>

		</div>
	);
}
