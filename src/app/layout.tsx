import { Navigation } from "@/components/elements/navigation";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image"

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
			<body className={`${montserrat.variable} ${roboto.variable} antialiased flex flex-col dark `}>

				<div className="flex h-136 w-screen absolute bg-linear-to-t from-background to-black">
					<Image priority fill src="/Imagem PNG.png" alt="Theater" className="opacity-20 object-cover" />
				</div>

				<Navigation />

				<main className="flex flex-col items-center sm:items-start p-6 max-w-screen ">
					{children}
				</main>

				<footer className="flex font-mont p-6 text-mauve-11 text-center border-t items-center justify-center h-20">
					2023 © Todos os direitos reservados a Cubos Movies
				</footer>

			</body>
		</html>
	);
}
