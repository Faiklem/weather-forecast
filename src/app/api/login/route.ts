import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	try {
		const { email, password } = await req.json()

		const AUTH_API_KEY = process.env.AUTH_API_KEY
		const AUTH_URL = 'https://reqres.in/api/login'

		const res = await fetch(AUTH_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': AUTH_API_KEY!,
			},
			body: JSON.stringify({ email, password }),
		})

		if (!res.ok) {
			const errData = await res.json()
			return NextResponse.json(
				{ error: errData.error || 'Ошибка входа' },
				{ status: res.status }
			)
		}

		const data = await res.json()
		return NextResponse.json(data)
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message || 'Непредвиденная ошибка' },
			{ status: 500 }
		)
	}
}
