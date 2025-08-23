import MovieCard from "@/components/elements/movie-card";

const movieMockList = [
	{
		name: "Movie 1",
	},
	{
		name: "Movie 2",
	},
	{
		name: "Movie 3",
	},
	{
		name: "Movie 4",
	},
	{
		name: "Movie 5",
	},
	{
		name: "Movie 6",
	},
	{
		name: "Movie 7",
	},
	{
		name: "Movie 8",
	},
	{
		name: "Movie 9",
	},
	{
		name: "Movie 10",
	},
];

export default function Home() {
	return (
		<div className="font-sans flex flex-col min-h-screen w-full">

			<div className="flex flex-col gap-4">

				<div className=" relative w-full flex items-center justify-center p-6 border-dashed rounded-xl border-2">
					WIP: filtros
				</div>


				<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 rounded-md p-6 
			bg-mauve-alpha-3 backdrop-blur-xs">

					{movieMockList.map((movie) => (
						<MovieCard key={movie.name} movieData={movie} />
					))}
				</div>
			</div>

			<div className="w-full mt-auto flex items-center justify-center p-6 border-dashed rounded-xl border-2">
				paginador
			</div>

		</div>
	);
}
