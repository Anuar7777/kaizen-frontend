import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	private BASE_URL = `/auth`

	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this.BASE_URL}/${type}`,
			data
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this.BASE_URL}/refresh`
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this.BASE_URL}/logout`)

		if (response.data) {
			removeFromStorage()
		}

		return response
	}
}

export const authService = new AuthService()
