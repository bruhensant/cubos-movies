'use client'

import { Endpoint, FullMovie } from "@/lib/app.types";
import { getEntity } from "@/lib/tmdb.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieDetails() {
	const params = useParams();
	const movieId = Number(params.movie);

	const [movieData, setMovieData] = useState<FullMovie | null>(null);

	useEffect(() => {
		getEntity<FullMovie>(Endpoint.MOVIE_DETAILS, movieId).then(data => {
			setMovieData(data);
		})
	}, []);

	// const posterUrl = movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : '';

	return (
		<div className="flex flex-col gap-6 w-full">

			<div className="relative rounded-md w-full p-6 grid grid-cols-5 gap-6 bg-white">

				<div className="rounded-md p-6 col-span-1 h-100 bg-custom-mauve-2 backdrop-blur-xs">
					{movieData?.id}
				</div>

				<div className="flex flex-col col-span-2 rounded-md bg-custom-mauve-2 backdrop-blur-xs">
					{movieData?.title}

					<span>Título original: {movieData?.original_title}</span>
					<span>{movieData?.tagline}</span>
					<span>sinopse: {movieData?.overview}</span>
					<span>gêneros: {movieData?.genres.map(genre => genre.name).join(", ")}</span>
				</div>

				<div className="col-span-2 grid grid-cols-6 gap-6 *:bg-custom-mauve-2 *:backdrop-blur-xs">
					<div className="flex flex-col gap-1 col-span-2 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Popularidade
						</span>
						<span className="font-bold text-md">
						{movieData?.popularity}

						</span>
					</div>
					<div className="flex flex-col gap-1 col-span-2 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Votos
						</span>
						<span className="font-bold text-md">
						{movieData?.vote_count}

						</span>
					</div>
					<div className="flex flex-col gap-1 col-span-2 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Percentual
						</span>
						<span className="font-bold text-md">
						{movieData?.vote_average}

						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-3 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Lançamento
						</span>
						<span className="font-bold text-md">
						{movieData?.release_date}

						</span>
					</div>
					<div className="flex flex-col gap-1 col-span-3 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Duração
						</span>
						<span className="font-bold text-md">
						{movieData?.runtime}

						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-3 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Situação
						</span>
						<span className="font-bold text-md">
						{movieData?.status}

						</span>
					</div>
					<div className="flex flex-col gap-1 col-span-3 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Idioma
						</span>
						<span className="font-bold text-md">
						{movieData?.original_language}

						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-2 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Orçamento
						</span>
						<span className="font-bold text-md">
						{movieData?.budget}

						</span>
					</div>
					<div className="flex flex-col gap-1 col-span-2 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Receita
						</span>
						<span className="font-bold text-md">
						{movieData?.revenue}

						</span>
					</div>
					<div className="flex flex-col gap-1 col-span-2 rounded-md p-6">
						<span className="uppercase font-mont font-semibold text-md">
							Lucro
						</span>
						<span className="font-bold text-md">
						{Number(movieData?.revenue) - Number(movieData?.budget)}

						</span>
					</div>
				</div>

			</div>

			<div className="flex flex-col gap-4">
				<span className="text-2xl font-bold">
					Trailer
				</span>

				<div className="rounded-sm border p-6 gap-4">
					video
				</div>
			</div>
		</div>
	);
}
