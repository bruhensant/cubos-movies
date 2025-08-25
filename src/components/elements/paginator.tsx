import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

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
		const delta = 2;
		const range = [];
		const rangeWithDots = [];

		for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
			range.push(i);
		}

		if (currentPage - delta > 2) {
			rangeWithDots.push(1, '...');
		} else {
			rangeWithDots.push(1);
		}

		rangeWithDots.push(...range);

		if (currentPage + delta < totalPages - 1) {
			rangeWithDots.push('...', totalPages);
		} else if (totalPages > 1) {
			rangeWithDots.push(totalPages);
		}

		return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index);
	};

	const visiblePages = getVisiblePages();

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious 
						onClick={(e) => {
							e.preventDefault();
							if (currentPage > 1) {
								onPageChange(currentPage - 1);
							}
						}}
						className={currentPage <= 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
					/>
				</PaginationItem>

				{visiblePages.map((page, index) => (
					<PaginationItem key={index}>
						{page === '...' ? (
							<PaginationEllipsis />
						) : (
							<PaginationLink 
								onClick={(e) => {
									e.preventDefault();
									onPageChange(page as number);
								}}
								isActive={page === currentPage}
								className="cursor-pointer"
							>
								{page}
							</PaginationLink>
						)}
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext 
						onClick={(e) => {
							e.preventDefault();
							if (currentPage < totalPages) {
								onPageChange(currentPage + 1);
							}
						}}
						className={currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
					/>
				</PaginationItem>

			</PaginationContent>
		</Pagination>
	)
}
