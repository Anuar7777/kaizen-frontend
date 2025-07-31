import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				'linear rounded-lg cursor-pointer p-2.5 bg-primary text-white font-bold transition-color duration-400 hover:bg-primary-dark',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
