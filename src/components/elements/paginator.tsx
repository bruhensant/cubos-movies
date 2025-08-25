import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";


export function Paginator({ moveFn, nextPage, previousPage }) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious onClick={() => moveFn(previousPage)} />
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="#" isActive>
						2
					</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>

				<PaginationItem>
					<PaginationNext onClick={() => moveFn(nextPage)} />
				</PaginationItem>

			</PaginationContent>
		</Pagination>
	)
}
