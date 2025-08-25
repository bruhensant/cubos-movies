import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

type PaginatorProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function Paginator({ currentPage, totalPages, onPageChange }: PaginatorProps) {

	if (totalPages <= 1) {
		return null;
	}
	
	const getVisiblePages = () => {
		const maxVisiblePages = 5;
		const pages = [];

		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
			return pages;
		}
		
		let startPage = Math.max(1, currentPage - 2);
		let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
		
		if (endPage - startPage + 1 < maxVisiblePages) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}
		
		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}
		
		return pages;
	};

	const visiblePages = getVisiblePages();

	return (
		<Pagination className="mt-auto">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						isActive={currentPage === 1}
						onClick={(e) => {
							e.preventDefault();
							if (currentPage > 1) {
								onPageChange(currentPage - 1);
							}
						}}
					/>
				</PaginationItem>

				{visiblePages.map((page, index) => (
					<PaginationItem key={index}>
						<PaginationLink 
							onClick={(e) => {
								e.preventDefault();
								onPageChange(page);
							}}
							isActive={page === currentPage}
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext
						isActive={currentPage === totalPages}
						onClick={(e) => {
							e.preventDefault();
							if (currentPage < totalPages) {
								onPageChange(currentPage + 1);
							}
						}}
					
					/>
				</PaginationItem>

			</PaginationContent>
		</Pagination>
	)
}
