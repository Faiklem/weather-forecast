'use client'

import Image from 'next/image'

type WeatherIconProps = {
	icon: string
}

export const WeatherIcon = ({ icon }: WeatherIconProps) => {
	const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

	return (
		<Image
			src={imageUrl}
			alt='Иконка погоды'
			width={50}
			height={50}
			className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]'
			priority
		/>
	)
}
