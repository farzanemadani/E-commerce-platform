import type { Metadata } from 'next'

import { siteConfig } from '@/shared/config'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
  dialog,
}: {
  children: React.ReactNode
  dialog: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {dialog}
      </body>
    </html>
  )
}
