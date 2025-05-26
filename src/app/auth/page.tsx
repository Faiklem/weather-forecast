import { Metadata } from 'next'
import AuthPage from './AuthPage'

export const metadata: Metadata = {
	title: 'Вход в систему',
	description: 'Авторизация для доступа к погодному сервису.',
}

export default function Page() {
	return <AuthPage />
}
