import { AuthResponse, LoginDto } from '@/types/auth.type'

class AuthService {
	async auth(body: LoginDto): Promise<AuthResponse> {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			const errData = await response.json()
			throw new Error(errData.error || 'Ошибка авторизации')
		}

		const data: AuthResponse = await response.json()
		return data
	}
}

export const authService = new AuthService()
