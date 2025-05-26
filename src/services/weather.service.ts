import { WeatherResponse } from '@/types/weather-forecast.type'

class WeatherForecast {
	async getWeather(): Promise<WeatherResponse> {
		const res = await fetch('/api/weather')
		if (!res.ok) {
			throw new Error(`Ошибка погоды: ${res.status}`)
		}
		const data = await res.json()
		return data
	}
}

export const weatherForecast = new WeatherForecast()
