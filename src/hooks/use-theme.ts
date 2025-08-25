"use client"

import { useEffect, useState } from "react"

export type Theme = "dark" | "light" | "system"

// useTheme hook para gerenciar o tema da aplicação
export function useTheme() {
	const [theme, setTheme] = useState<Theme>("system")
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const savedTheme = localStorage.getItem("theme") as Theme
		if (savedTheme) {
			setTheme(savedTheme)
		}
	}, [])

	useEffect(() => {
		if (!mounted) return

		const root = document.documentElement
		root.classList.remove("light", "dark")

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
			root.classList.add(systemTheme)
		} else {
			root.classList.add(theme)
		}

		localStorage.setItem("theme", theme)
	}, [theme, mounted])

	const toggleTheme = () => {
		setTheme(prev => prev === "dark" ? "light" : "dark")
	}

	const setThemeValue = (newTheme: Theme) => {
		setTheme(newTheme)
	}

	const currentTheme = mounted ? theme : "system"
	const isDark = mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches))

	return {
		theme: currentTheme,
		setTheme: setThemeValue,
		toggleTheme,
		isDark,
		mounted
	}
}
