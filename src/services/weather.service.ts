import { WeatherResponse } from '@/types/weather-forecast.type'

class WeatherForecast {
	private API_KEY = 'd3b46508e049ff79419989b65115d1d0'
	private readonly CITY_NAME = 'Moscow'

	private getUrl() {
		return `https://api.openweathermap.org/data/2.5/weather?q=${this.CITY_NAME}&units=metric&appid=${this.API_KEY}&lang=ru`
	}

	async getWeather(): Promise<WeatherResponse> {
		try {
			const res = await fetch(this.getUrl())

			if (!res.ok) {
				throw new Error(`Ошибка запроса: ${res.status}`)
			}

			const data = await res.json()
			return data
		} catch (err) {
			console.error('Ошибка получения погоды:', err)
			throw err
		}
	}
}

export const weatherForecast = new WeatherForecast()
