import { AuthResponse, LoginDto } from '@/types/auth.type'

class AuthService {
	private API_KEY = process.env.AUTH_API_KEY ?? ''
	private URL = 'https://reqres.in/api/login'

	async auth(body: LoginDto): Promise<AuthResponse> {
		const response = await fetch(this.URL, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'x-api-key': this.API_KEY,
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data: AuthResponse = await response.json()
		return data
	}
}

export const authService = new AuthService()
