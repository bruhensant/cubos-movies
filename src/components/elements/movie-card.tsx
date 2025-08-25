import { Movie } from "@/lib/app.types";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Progress } from "../ui/progress";

/**
 * MovieCard component that displays movie information with poster background
 */
export default function MovieCard({ movieData }: { movieData: Movie }) {
	const posterUrl = movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : '';

	return (
		<Link href={`${movieData.id}`}>
			<Card
				className="group flex relative overflow-clip bg-cover bg-center bg-no-repeat h-64 sm:h-84 2xl:h-120"
				style={{
					backgroundImage: posterUrl ? `url(${posterUrl})` : 'none'
				}}>

				<div className="absolute inset-0 group-hover:bg-opacity-100transition-all duration-300 flex items-center justify-center pointer-events-none">
					<div className="opacity-0 bg-background p-4 group-hover:opacity-100 transition-opacity flex flex-col gap-1 col-span-2 rounded-md h-fit">

						<span className="uppercase font-mont font-semibold text-mauve-11">
							Avaliação
						</span>
						<span className="text-sm flex gap-1 items-center font-regular sm:font-bold">
							{movieData?.vote_average?.toFixed(2)}<span className="font-medium">/10</span>

							{movieData &&
								<Progress value={movieData?.vote_average * 10} />
							}
						</span>


					</div>
				</div>

				<CardHeader className="relative mt-auto group-hover:bg-gradient-to-t group-hover:from-60% transition-all">
					<CardTitle className="text-white font-mont uppercase leading-5">
						{movieData.title}
					</CardTitle>
				</CardHeader>

			</Card>
		</Link>
	);
};
