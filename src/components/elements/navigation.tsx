"use client"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

function toggleDarkTheme() {
	console.warn('dk')	// Logic to toggle dark theme
}

export function Navigation() {
	return (

		<NavigationMenu className="w-full flex justify-between items-center px-6 py-4 border-b backdrop-blur-sm">

			<NavigationMenuLink asChild>
				<Link href={'/'} aria-label="Home Page">
					<NavigationMenuItem className="flex gap-2 items-center font-mont">
						<Image priority className="invert-0 dark:invert" height={36} width={160} src="/Imagem SVG.svg" alt="Logo" />
						<h1 className="text-2xl">Movies</h1>
					</NavigationMenuItem>
				</Link>
			</NavigationMenuLink>


			<NavigationMenuItem>
				<Button variant={"secondary"} onClick={() => toggleDarkTheme()}>
					<Icon icon="lets-icons:sun"></Icon>
				</Button>
			</NavigationMenuItem>
		</NavigationMenu >
	)
}
