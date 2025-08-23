import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Navigation } from "@/components/elements/navigation/navigation";


const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});


export const metadata: Metadata = {
	title: "Cubos Movies",
	description: "Aplicativo de busca de filmes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${roboto.variable} antialiased flex flex-col dark`}
			>

					<Navigation/>
				<main className="flex flex-col items-center sm:items-start p-6">
						
					{children}
				</main>


				<footer className="flex font-mont text-mauve-11 border-t items-center justify-center h-20">
					2023 © Todos os direitos reservados a Cubos Movies
				</footer>
			</body>
		</html>
	);
}
