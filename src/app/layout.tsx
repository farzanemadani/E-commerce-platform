import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { siteConfig } from '@/shared/config'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import { AppProviders } from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

const yekanBakh = localFont({
  src: '../../public/fonts/YekanBakh-VF.ttf',
  display: 'fallback',
  variable: '--font-sans',
  weight: '100 900',
})

export default function RootLayout({
  children,
  dialog,
}: {
  children: React.ReactNode
  dialog: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl" className={yekanBakh.variable}>
      <body>
        <AppProviders>
          <Header />
          <main className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
            {children}
          </main>
          <Footer />
          {dialog}
        </AppProviders>
      </body>
    </html>
  )
}
