'use client'
import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/shared/lib/theme'
import { Button } from '@/shared/ui/button'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" className="cursor-pointer" onClick={handleToggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
