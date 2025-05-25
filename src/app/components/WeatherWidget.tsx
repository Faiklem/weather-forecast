'use client'

import type { WeatherResponse } from '@/types/weather-forecast.type'
import { capitalize } from '@/utils/capitalizeFirstLetter'
import { formatTemperature } from '@/utils/formatTemperature'
import { Wind } from 'lucide-react'
import { WeatherIcon } from './WeatherIcon'

type Props = {
	weather: WeatherResponse
}

export const WeatherWidget = ({ weather }: Props) => {
	const temp = Math.round(weather.main.temp)
	const feels = Math.round(weather.main.feels_like)

	return (
		<div className='p-3 md:p-5 rounded-xl widget w-fit'>
			<p className='grid-temp temp self-center xs:mr-2'>
				{formatTemperature(temp)}°
			</p>
			<div className='flex gap-1 items-center grid-desc'>
				<WeatherIcon icon={weather.weather[0].icon} />
				<p>{capitalize(weather.weather[0].description)}</p>
			</div>
			<p className='grid-feels xs:mr-4 md:mr-8 max-xs:mb-1'>
				Ощущается как {formatTemperature(feels)}°
			</p>
			<div className='flex gap-1 grid-wind'>
				<Wind strokeWidth={1.75} className='wind-icon' />
				<p>{weather.wind.speed} м/с</p>
			</div>
		</div>
	)
}
