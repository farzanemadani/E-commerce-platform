'use client'

import { createContext, useContext } from 'react'

import type { Theme, ThemeContextValue } from './types'

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: (_theme: Theme) => {},
})

export const useTheme = () => useContext(ThemeContext)
