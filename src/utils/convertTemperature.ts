export function convertTemperature(temp: number) {
	return Math.round((temp - 273.15) * 100) / 100
}
