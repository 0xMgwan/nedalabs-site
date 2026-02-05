import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neda Labs | Building the Future of Finance in East Africa',
  description: 'Cutting-edge tech lab building global digital financial solutions including stablecoins, instant payments, developer APIs, and the JUKUMU network for regenerative finance.',
  keywords: 'fintech, stablecoins, payments, Tanzania, East Africa, blockchain, ReFi, regenerative finance, developer APIs',
  openGraph: {
    title: 'Neda Labs | Building the Future of Finance in East Africa',
    description: 'Global digital financial solutions for sustainable community impact and financial inclusion.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
