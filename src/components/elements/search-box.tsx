'use client'

import { SearchInput } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react"
import { use, useEffect, useState } from "react"
import { getEntites } from "@/lib/tmdb.service"
import { Endpoint, Genre, Movie } from "@/lib/app.types"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"


export function SearchBox({ searchFn, setMovies }: { searchFn: (query: string) => void, setMovies: (movies: Movie[]) => void }) {
	const [filterContainerState, setFilterContainerState] = useState(false);
	const [filterInputState, setFilterInputState] = useState('');
	const [genreList, setGenreList] = useState<Genre[]>([]);
	const [selectedGenreList, setSelectedGenreList] = useState<number[]>([]);


	useEffect(() => {
		getEntites<{ genres: Genre[] }>(Endpoint.MOVIE_GENRES).then((data) => {
			setGenreList(data.genres);
		});
	}, [filterContainerState])

	function handleCompositeSearch(){
		getEntites<{ results: Movie[] }>(Endpoint.MOVIE_DISCOVER, { with_genres: selectedGenreList.join(',') }).then((data) => {
			setMovies(data.results);
		});
	}

	return (
		<div className="relative w-full flex flex-col items-center justify-center p-6 gap-4">
			<div className="flex items-center justify-center gap-4">

				<div className="flex items-center justify-center">

					<SearchInput placeholder="Pesquise por filmes" className={`w-70 sm:w-150 ${filterContainerState ? 'rounded-r-md border' : 'block'}`} type="search" onChange={(event) => setFilterInputState(event.target.value)}
						onKeyDown={
							(event) => {
								if (event.key === 'Enter') {
									searchFn(filterInputState);
								}
							}
						} />

					{!filterContainerState &&

						<Button className=" flex items-center rounded-r-sm justify-center rounded-l-none border border-mauve-6 border-l-0 bg-input h-14 w-14" onClick={() => searchFn(filterInputState)}>
							<Icon icon="lets-icons:search-alt-fill" />
						</Button>
					}
				</div>

				<Button variant={'secondary'} className="h-14" onClick={() => setFilterContainerState(!filterContainerState)}>
					<Icon icon="lets-icons:filter" />
				</Button>

			</div>

			{
				filterContainerState &&
				<div className="border flex flex-col gap-4 transition-all rounded-md bg-background backdrop-blur-xs p-6">
					<div className="gap-2 grid grid-cols-6">
						{genreList?.map(genre => (
							<div key={genre.id} className="flex items-center gap-2">
								<Checkbox id={`genre-${genre.id}`} value={genre.id} onCheckedChange={(checked) => {
									if (checked) {
										setSelectedGenreList((prev) => [...prev, genre.id]);
									} else {
										setSelectedGenreList((prev) => prev.filter((g) => g !== genre.id));
									}
								}} />
								<Label htmlFor={`genre-${genre.id}`}>{genre.name}</Label>
							</div>
						))}
					</div>

					<div className="flex items-center justify-end">
						<Button onClick={() => handleCompositeSearch()}>
							Pesquisar
						</Button>
					</div>
				</div>
			}

		</div>
	)
}
