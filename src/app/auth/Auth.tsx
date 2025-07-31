'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { Button } from '../components/ui/Button'
import { Field } from '../components/ui/Field'
import { authService } from '../services/auth.service'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<form
				className='bg-white text-primary flex flex-col px-21 rounded-2xl'
				onSubmit={handleSubmit(onSubmit)}
			>
				<legend className='font-bold text-5xl border-b-silver border-b pb-2.5 inline-block mb-2.5 mt-10'>
					Auth
				</legend>
				<Field
					id='email'
					label='Email:'
					placeholder='Enter Email...'
					type='email'
					{...register('email', {
						required: 'Email is required'
					})}
				/>
				<Field
					id='password'
					label='Password:'
					placeholder='Enter password...'
					type='password'
					{...register('password', {
						required: 'Password is required'
					})}
				/>
				<div className='flex justify-between mt-3 mb-15 gap-10'>
					<Button
						className='w-38'
						onClick={() => setIsLoginForm(true)}
					>
						Login
					</Button>
					<Button
						className='w-38'
						onClick={() => setIsLoginForm(false)}
					>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
}
