import { Movie } from "@/lib/app.types";

export default function MovieCard({movieData}: {movieData: Movie}){
	return (
		<div className="w-full h-84 border">
			{movieData.name}
		</div>
	)
}
