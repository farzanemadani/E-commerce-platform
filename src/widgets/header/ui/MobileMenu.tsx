'use client'
import { useState } from 'react'

import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { ChevronDown, Menu } from 'lucide-react'
import Link from 'next/link'
import { useToggle } from 'usehooks-ts'

import { cn } from '@/lib/utils'
import { navLinks } from '@/shared/config'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer'

export default function MobileMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isOpen, toggleOpen] = useToggle(false)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={toggleOpen}>
      <DrawerTrigger asChild>
        <button title="menu-btn" onClick={toggleOpen}>
          <Menu className="lg:hidden" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden>
          <DrawerTitle>mobile menu</DrawerTitle>
          <DrawerDescription> mobile menu</DrawerDescription>
        </VisuallyHidden>

        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link, i) => (
            <div key={i}>
              {link.children ? (
                <span
                  className="flex cursor-pointer text-sm text-gray-600 hover:text-black"
                  onClick={() => handleToggle(i)}
                >
                  {link.label}
                  <ChevronDown
                    className={cn({ 'rotate-180': openIndex === i }, 'mx-2 w-4 transition-all')}
                  />
                </span>
              ) : (
                <Link href={link.href} className="text-sm text-gray-600 hover:text-black">
                  {link.label}
                </Link>
              )}

              {link.children && openIndex === i && (
                <div className="mt-2 mr-4 flex flex-col gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-xs text-gray-500 hover:text-black"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
