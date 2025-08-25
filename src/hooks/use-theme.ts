"use client"

import { useEffect, useState } from "react"

export type Theme = "dark" | "light" | "system"

// useTheme hook para gerenciar o tema
export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === "undefined") return "system"
		
		try {
			const savedTheme = localStorage.getItem("theme") as Theme
			return savedTheme || "system"
		} catch {
			return "system"
		}
	})
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		

		try {
			const savedTheme = localStorage.getItem("theme") as Theme
			if (savedTheme && savedTheme !== theme) {
				setTheme(savedTheme)
			}
		} catch {
		}
	}, [])

	useEffect(() => {
		if (!mounted) return

		const root = document.documentElement
		
		root.classList.remove("light", "dark")

		let effectiveTheme: "light" | "dark"
		
		if (theme === "system") {
			effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
		} else {
			effectiveTheme = theme
		}

		root.classList.add(effectiveTheme)

		try {
			const currentSaved = localStorage.getItem("theme")
			if (currentSaved !== theme) {
				localStorage.setItem("theme", theme)
			}
		} catch {
		}
	}, [theme, mounted])

	const toggleTheme = () => {
		setTheme(prev => prev === "dark" ? "light" : "dark")
	}

	const setThemeValue = (newTheme: Theme) => {
		setTheme(newTheme)
	}

	const currentTheme = mounted ? theme : "system"
	
	const isDark = mounted && (
		theme === "dark" || 
		(theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)
	)

	return {
		theme: currentTheme,
		setTheme: setThemeValue,
		toggleTheme,
		isDark,
		mounted
	}
}
