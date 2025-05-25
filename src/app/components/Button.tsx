'use client'

import { ComponentProps } from 'react'

interface IButtonProps extends ComponentProps<'button'> {
	children: React.ReactNode
	variant?: 'primary' | 'danger'
}

export default function Button({
	variant = 'primary',
	children,
	...props
}: IButtonProps) {
	return (
		<button className={variant === 'primary' ? 'primary' : 'danger'}>
			{children}
		</button>
	)
}
