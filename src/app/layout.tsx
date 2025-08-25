import { Navigation } from "@/components/elements/navigation";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image"
import { url } from "inspector";

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

			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								const theme = localStorage.getItem('theme') || 'system'
								if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
									document.documentElement.classList.add('dark')
								} else {
									document.documentElement.classList.add('light')
								}
							})()
						`,
					}}
				/>
			</head>
			
			<body className={`${montserrat.variable} ${roboto.variable} antialiased flex flex-col overflow-x-clip`}>

				<Navigation />
				<div className="flex dark:brightness-20">
					<Image priority height={1000} width={3000} src="/Imagem PNG.png" alt="Theater" className="object-cover absolute" />
				</div>

				<main className="flex flex-col items-center sm:items-start p-0 sm:p-6 max-w-screen 2xl:mx-50 relative">
					
					{children}
				</main>

				<footer className="flex gap-1 font-mont p-6 pointer-events-none text-mauve-11 text-center border-t items-center justify-center h-20 z-999">
					2023 © Todos os direitos reservados a 
					<span className="font-medium">
					Cubos Movies
					</span>
				</footer>

			</body>
		</html>
	);
}
