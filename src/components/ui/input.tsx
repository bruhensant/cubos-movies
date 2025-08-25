import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { Button } from "./button"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-background p-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				className
			)}
			{...props}

		/>
	)
}

function SearchInput({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<div className="flex items-center gap-0">

			<input
				type={type}
				data-slot="input"
				className={cn(
					"group",
					"file:text-foreground placeholder:text-muted-foreground selection:bg-purple-9 selection:text-primary-foreground bg-input border-mauve-6 flex h-14 w-full min-w-0 rounded-l-sm border border-r-0 px-4 py-3 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					"focus-visible:border-ring-purple-9 focus-visible:border-purple-9 caret-purple-9 focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					className
				)}
				{...props}
			/>

		</div>
	)
}

export { Input, SearchInput }
