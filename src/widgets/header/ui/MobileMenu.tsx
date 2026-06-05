'use client'
import { useState } from 'react'

import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Menu } from 'lucide-react'

import { navLinks } from '@/shared/config'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer'

import { MobileMenuItems } from './ MobileMenuItems'

export function MobileMenu() {
  const [openItems, setOpenItems] = useState(() => new Set<string>())
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (key: string) => {
    setOpenItems((current) => {
      const next = new Set(current)

      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }

      return next
    })
  }

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button type="button" title="menu-btn">
          <Menu className="lg:hidden" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden>
          <DrawerTitle>mobile menu</DrawerTitle>
          <DrawerDescription> mobile menu</DrawerDescription>
        </VisuallyHidden>

        <nav className="flex flex-col gap-4 p-4">
          <MobileMenuItems items={navLinks} openItems={openItems} onToggle={handleToggle} />
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
