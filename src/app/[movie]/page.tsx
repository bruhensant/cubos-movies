'use client'

import { Endpoint, FullMovie } from "@/lib/app.types";
import { getEntity } from "@/lib/tmdb.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatCurrencyToUSD, formatDate, formatHoursAndMinutes } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export default function MovieDetails() {
	const params = useParams();
	const movieId = Number(params.movie);
	const [movieData, setMovieData] = useState<FullMovie | null>(null);

	useEffect(() => {
		getEntity<FullMovie>(Endpoint.MOVIE_DETAILS, movieId).then(data => {
			setMovieData(data);
		})
	}, []);

	const movieStatusMap = {
		Released: 'Lançado',
		Rumored: 'Rumorado',
		Planned: 'Planejado',
		'In Production': 'Em Produção',
		'Post Production': 'Pós Produção',
		Canceled: 'Cancelado'
	}

	const posterUrl = movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : null;
	const backdropUrl = movieData?.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}` : null;

	const trailerVideo = movieData?.videos.results.filter(video => video.type === 'Trailer')[0]?.key || undefined;

	return (
		<div className="flex flex-col gap-6 w-full">

			<div className="relative rounded-none sm:rounded-md overflow-clip h-fit w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 bg-custom-mauve-2">

				{
					backdropUrl &&
					<Image src={backdropUrl} alt="Movie Poster" fill className="object-cover brightness-20">
					</Image>
				}

				{
					posterUrl &&
					<div className="h-140 sm:h-150 md:h-120 lg:h-170 2xl:h-210 w-full relative">
						<Image src={posterUrl} alt="Movie Backdrop" fill className="rounded-md bg-custom-mauve-2 object-cover" />
					</div>
				}

				<div className="flex flex-col gap-4 relative">
					<div className="flex flex-col gap-2">
						<span className="text-2xl font-semibold">{movieData?.title}</span>
						<span className="text-sm text-mauve-11">Título original: {movieData?.original_title}</span>
					</div>

					<span className="font-xs italic">{movieData?.tagline}</span>

					<div className="flex flex-col gap-2 rounded-md p-4 bg-custom-mauve-2 backdrop-blur-xs">
						<span className="font-mont font-bold uppercase text-mauve-11">
							Sinópse
						</span>

						<span>
							{movieData?.overview}
						</span>
					</div>

					<span className="flex flex-col gap-2 rounded-md p-4 bg-custom-mauve-2 backdrop-blur-xs">
						<span className="font-mont font-bold uppercase text-mauve-11">
							Gêneros
						</span>
						<div className="flex flex-wrap gap-4">
							{movieData?.genres.map(genre => (
								<span key={genre.id} className="rounded py-2 px-3 bg-purple-4 font-regular uppercase font-mont">
									{genre.name}
								</span>
							))}
						</div>
					</span>
				</div>

				<div className="grid grid-cols-6 gap-4 *:bg-custom-mauve-2 h-fit *:backdrop-blur-xs text-xs *:p-4">

					<div className="flex flex-col gap-1 col-span-2 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-md text-mauve-11">
							Popularidade
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{movieData?.popularity}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-2 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Votos
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{movieData?.vote_count}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-2 rounded-md h-fit">

						<span className="uppercase font-mont font-semibold text-mauve-11">
							Avaliação
						</span>
						<span className="text-sm flex gap-1 items-center font-regular sm:font-bold">
							{movieData?.vote_average.toFixed(2)}<span className="font-medium">/10</span>

							{movieData &&
								<Progress value={movieData?.vote_average * 10} />
							}
						</span>

					</div>

					<div className="flex flex-col gap-1 col-span-3 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Lançamento
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{formatDate(movieData?.release_date)}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-3 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Duração
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{formatHoursAndMinutes(movieData?.runtime)}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-3 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Situação
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{movieData && movieData.status in movieStatusMap ? movieStatusMap[movieData.status as keyof typeof movieStatusMap] : movieData?.status}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-3 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Idioma
						</span>
						<span className="text-sm font-regular sm:font-bold capitalize">
							{movieData?.original_language ? new Intl.DisplayNames(['pt-BR'], { type: 'language', style: 'long' }).of(movieData.original_language) : 'N/A'}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-2 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Orçamento
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{formatCurrencyToUSD(movieData?.budget)}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-2 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Receita
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{formatCurrencyToUSD(movieData?.revenue)}
						</span>
					</div>

					<div className="flex flex-col gap-1 col-span-2 rounded-md h-fit">
						<span className="uppercase font-mont font-semibold text-mauve-11">
							Lucro
						</span>
						<span className="text-sm font-regular sm:font-bold">
							{formatCurrencyToUSD(Number(movieData?.revenue) - Number(movieData?.budget))}
						</span>
					</div>
				</div>

			</div>

			<div className="flex flex-col gap-4 h-fit p-6 sm:p-0">
				<span className="text-2xl font-bold">
					Trailer
				</span>

				{
					trailerVideo ? (
						<iframe className="w-full aspect-video rounded-md" src={"https://www.youtube.com/embed/" + trailerVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					) : (
						<div className="w-full aspect-video border-dashed rounded-md flex items-center justify-center border bg-background">
							<p className="text-lg uppercase text-primary">Nenhum trailer disponível no seu idioma.</p>
						</div>
					)
				}

			</div>
		</div>
	);
}
