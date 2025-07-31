import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'
import { Providers } from './providers'

const openSans = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '600', '700'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Kanban-style task management tool'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${openSans.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
