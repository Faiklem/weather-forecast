export async function GET() {
	const API_KEY = process.env.WEATHER_API_KEY
	const CITY_NAME = 'Moscow'

	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}&lang=ru`
	)
	const data = await res.json()

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' },
	})
}
