import type { Metadata } from 'next'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import './globals.css'
import Header from '@/components/Header'

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
    <html lang="en" className="h-full">
      <body className="h-full bg-white font-jakarta antialiased">
        <Header />
        <div className="flex min-h-full flex-col pt-16">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
