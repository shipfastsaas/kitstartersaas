import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

// Optimiser le chargement des polices
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'SaaS Starter Template',
  description: 'A modern SaaS starter template built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${outfit.variable} ${jakarta.variable}`}>
      <body className="h-full bg-white font-jakarta antialiased">
        <Header />
        <div className="flex min-h-full flex-col pt-16">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
