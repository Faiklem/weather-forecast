'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
	children: React.ReactNode
}

export default function AuthGuard({ children }: Props) {
	const [authorized, setAuthorized] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const token = localStorage.getItem('token')

		if (!token) {
			router.replace('/auth')
		} else {
			setAuthorized(true)
		}
	}, [router])

	if (!authorized) {
		return null
	}

	return <>{children}</>
}
