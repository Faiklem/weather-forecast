type Props = {
	message: string
}

export default function ErrorMessage({ message }: Props) {
	return (
		<div className='flex min-h-screen w-full items-center justify-center px-4'>
			<div className='border border-red-500 text-red-700 bg-red-100 dark:bg-red-950 dark:text-red-400 dark:border-red-400 rounded-xl p-6 max-w-md text-center shadow-md'>
				<h1>Ошибка</h1>
				<p>{message}</p>
			</div>
		</div>
	)
}
