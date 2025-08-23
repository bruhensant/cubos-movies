import { Movie } from "@/lib/app.types";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function MovieCard({ movieData }: { movieData: Movie }) {
	return (
		<Card className="h-84">
			
			<CardHeader>
				<CardTitle>
					{movieData.name}
				</CardTitle>
			</CardHeader>
		</Card>
	)
}
