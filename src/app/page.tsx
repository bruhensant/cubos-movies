import MovieCard from "@/components/elements/movie-card/movie-card";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu";

export default function Home() {
	return (
		<div className="font-sans flex flex-col min-h-screen gap-40">

			filtros

			<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 rounded-md p-6 
			bg-mauve-alpha-3 backdrop-blur-xs">
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>


			paginador

		</div>
	);
}
