import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn twMerge util for tailwind
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

/**
 * @description Converts total minutes to a string in the format "Xh Ym"
 * @export
 * @param {(number | undefined)} totalMinutes
 * @return {*}  {string}
 */
// formatHoursAndMinutes Converts total minutes to a string in the format "Xh Ym"
export function formatHoursAndMinutes(totalMinutes: number | undefined): string {
	if (!totalMinutes) return '';

	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${hours}h ${minutes}m`;
}

// formatCurrencyToUSD Converts a number to a USD currency string
export function formatCurrencyToUSD(amount: number | undefined): string {
	if (!amount) return 'Não informado';

	if (amount >= 1000000000) {
		return `$${(amount / 1000000000).toFixed(2)}B`;
	}

	if (amount >= 1000000) {
		return `$${(amount / 1000000).toFixed(2)}M`;
	}

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
}
