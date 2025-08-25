import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * @description Converts date format to a more readable string
 * @export
 * @param {(string | undefined)} dateString
 * @return {*}  {string}
 */
// formatDate Converts date format to a more readable string
export function formatDate(dateString: string | undefined): string {
	if (!dateString) return '';

	const options: Intl.DateTimeFormatOptions = {
		dateStyle: 'short'
	};

	return new Date(dateString).toLocaleDateString('pt-BR', options);
}
