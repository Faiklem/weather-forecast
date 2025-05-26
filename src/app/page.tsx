'use client'

import { weatherForecast } from '@/services/weather.service'
import { WeatherResponse } from '@/types/weather-forecast.type'
import { useEffect, useState } from 'react'
import AuthGuard from './components/AuthGuard'
import ErrorMessage from './components/ErrorMessage'
import Loader from './components/Loader'
import { WeatherWidget } from './components/WeatherWidget'

export default function Home() {
	const [weather, setWeather] = useState<WeatherResponse | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchWeather() {
			try {
				const data = await weatherForecast.getWeather()
				setWeather(data)
			} catch (e) {
				setError((e as Error).message)
			} finally {
				setLoading(false)
			}
		}
		fetchWeather()
	}, [])

	if (loading) return <Loader />
	if (error) return <ErrorMessage message={error} />

	return (
		<AuthGuard>
			<main className='flex flex-col min-h-screen items-center justify-center'>
				<h1 className='mb-3 text-center'>Погода в Москве</h1>
				{weather && <WeatherWidget weather={weather} />}
			</main>
		</AuthGuard>
	)
}
