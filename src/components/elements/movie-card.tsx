import { Movie } from "@/lib/app.types";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

/**
 * MovieCard component that displays movie information with poster background
 */
export default function MovieCard({ movieData }: { movieData: Movie }) {
	const posterUrl = movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : '';

	return (
		<Link href={`${movieData.id}`}>
			<Card
				className="flex relative overflow-clip bg-cover bg-center bg-no-repeat h-84 2xl:h-120"
				style={{
					backgroundImage: posterUrl ? `url(${posterUrl})` : 'none'
				}}>

				<CardHeader className="relative z-10 mt-auto">
					<CardTitle className="text-white font-mont uppercase leading-5">
						{movieData.title}
					</CardTitle>
				</CardHeader>

			</Card>
		</Link>
	);
};
