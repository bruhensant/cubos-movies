import { SearchInput } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react"

export function SearchBox(){
	return(
		<div className="relative w-full flex items-center justify-center p-6 gap-3">
			<SearchInput placeholder="Pesquise por filmes" className="w-70 sm:w-150" type="search"/>
			<Button variant={'secondary'} className="h-14">
				<Icon icon="lets-icons:filter"/>
			</Button>
		</div>
	)
}
