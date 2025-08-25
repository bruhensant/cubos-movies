'use client'

import { SearchInput } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react"
import { useState } from "react"


export function SearchBox( { searchFn }: { searchFn: (query: string) => void } ) {
	const [filterContainerState, setFilterContainerState] = useState(false);

	const [filterInputState, setFilterInputState] = useState('');

	return (
		<div className="relative w-full flex flex-col items-center justify-center p-6 gap-4">
			<div className="flex items-center justify-center">

				<SearchInput placeholder="Pesquise por filmes" className="w-70 sm:w-150" type="search" onChange={(event) => setFilterInputState(event.target.value)}
				onKeyDown={
					(event) => {
						if (event.key === 'Enter') {
							searchFn(filterInputState);
						}
					}
				} />

				<Button className=" flex items-center rounded-r-sm justify-center rounded-l-none border border-mauve-6 border-l-0 bg-input h-14 w-14" onClick={() => searchFn(filterInputState)}>
					<Icon icon="lets-icons:search-alt-fill" />
				</Button>

				<Button variant={'secondary'} className="h-14" onClick={() => setFilterContainerState(!filterContainerState)}>
					<Icon icon="lets-icons:filter" />
				</Button>
			</div>

			{
				filterContainerState &&
					<div className="border transition-all rounded-md bg-mauve-alpha-3 backdrop-blur-xs p-6">
						filtros aqui
					</div>
			}

		</div>
	)
}
