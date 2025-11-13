import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rayhan Misleh\'s Portifolio',
  description: 'Portfólio pessoal de Rayhan Misleh - Estudante de Programação & Marketing',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
