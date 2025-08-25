import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs text-sm font-medium transition-all cursor-pointer disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					"active:bg-purple-5 bg-purple-6 text-primary-foreground hover:bg-purple-7 dark:active:bg-purple-8 dark:bg-purple-9 dark:hover:bg-purple-10",
				secondary: "bg-purple-alpha-2 text-primary hover:bg-purple-alpha-3 active:bg-purple-alpha-1 backdrop-blur-sm",
				tertiary: "bg-transparent text-primary hover:bg-purple-10 active:bg-purple-8",
				outline: "border border-purple-9 text-primary hover:bg-purple-10 active:bg-purple-8",
				disabled: "bg-mauve-3 cursor-not-allowed pointer-events-none text-muted-foreground",
			},
			size: {
				default: "h-11 px-5 py-3",
				icon: "h-11 w-11"
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
