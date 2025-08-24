"use client"

import { SearchInput } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react"
import { useState } from "react"


export function SearchBox(){
	const [filterContainerState, setFilterContainerState] = useState(false)
	return(
		<div className="relative w-full flex flex-col items-center justify-center p-6 gap-4">
			<div className="flex items-center justify-center gap-3">

			<SearchInput placeholder="Pesquise por filmes" className="w-70 sm:w-150" type="search"/>
			<Button variant={'secondary'} className="h-14" onClick={() => setFilterContainerState(!filterContainerState)}>
				<Icon icon="lets-icons:filter"/>
			</Button>
			</div>

			{
				filterContainerState ?
				 <div className="border transition-all *:transition-all rounded-md bg-mauve-alpha-3 backdrop-blur-xs p-6">
					filtros aqui

				</div> : <div></div>
			}
		
		</div>
	)
}
