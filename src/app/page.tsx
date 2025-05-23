import { weatherForecast } from '@/services/weather.services'
import { WeatherWidget } from './components/WeatherWidget'

export const revalidate = 60

export default async function Home() {
	const weather = await weatherForecast.getWeather()

	return (
		<main className='flex flex-col min-h-screen items-center justify-center'>
			<h1>Погода в Москве</h1>
			<WeatherWidget weather={weather} />
		</main>
	)
}
