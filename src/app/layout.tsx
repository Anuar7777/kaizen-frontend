import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'
import { Providers } from './providers'

const notoSans = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-noto',
	style: 'normal'
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
			<body className={`${notoSans.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
