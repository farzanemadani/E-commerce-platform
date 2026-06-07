'use client'

import { ThemeProvider } from '@/shared/lib/theme'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
