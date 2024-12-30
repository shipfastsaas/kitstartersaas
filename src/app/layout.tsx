import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Script from 'next/script'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  verification: {
    google: 'Hkriyba_PuUuOE7hQpLEIovnsPyfxTBfA73G1xvHs3U',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${outfit.variable} ${jakarta.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKKPKS9P');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="h-full bg-white font-jakarta antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKKPKS9P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <div className="flex min-h-full flex-col pt-16">
          <main className="flex-1">
            <GoogleAnalytics />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
