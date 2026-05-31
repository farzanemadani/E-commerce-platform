import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/shared/config/site'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl" className={cn('font-sans', geist.variable)}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
