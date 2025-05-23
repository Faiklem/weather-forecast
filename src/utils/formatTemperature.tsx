export function formatTemperature(value: number): string {
	return value > 0 ? `+${value}` : value.toString()
}
