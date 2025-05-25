'use client'

import { authService } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from '../components/Button'

export default function AuthPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			router.replace('/')
		}
	}, [router])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(null)
		setLoading(true)

		try {
			const response = await authService.auth({ email, password })
			console.log('Успешный вход:', response)
			localStorage.setItem('token', response.token)
			router.push('/')
		} catch (err: any) {
			console.error(err)
			setError('Неверный логин или пароль')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex w-full min-h-screen justify-center items-center'>
			<div className='flex flex-col w-full max-w-[350px] h-fit justify-center items-center p-4 xs:p-8 max-xs:mx-5 login-form rounded-xl'>
				<h1 className='mb-5 xs:mb-8'>Вход</h1>
				<form onSubmit={handleSubmit} className='flex flex-col w-full gap-2'>
					<input
						type='email'
						placeholder='Введите адрес эл. почты'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						placeholder='Введите пароль'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button variant='primary' disabled={loading}>
						{loading ? 'Вход...' : 'Войти'}
					</Button>
					{error && (
						<p className='text-red-500 text-center mt-2 mx-auto'>{error}</p>
					)}
				</form>
			</div>
		</div>
	)
}
