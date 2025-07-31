import { forwardRef } from 'react'

interface InputFieldsProps {
	id: string
	label?: string
	type: 'email' | 'password' | 'text' | 'number'
	placeholder: string
	disabled?: boolean
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldsProps>(
	({ id, label, type, placeholder, disabled, isNumber, ...rest }, ref) => {
		return (
			<div className='flex flex-col mb-2'>
				<label
					htmlFor={id}
					className='text-primary text-xl font-bold mb-2'
				>
					{label}
				</label>
				<input
					ref={ref}
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
					className='border border-silver rounded-lg text-lg py-3 px-2.5 outline-none focus:border-primary font-bold'
				/>
			</div>
		)
	}
)
