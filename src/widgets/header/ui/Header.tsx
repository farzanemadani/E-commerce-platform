import { User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/shared/ui/button'
const links = [
  { label: 'خانه', href: '/' },
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس با ما', href: '/contact' },
]

export function Header() {
  return (
    <header className="border-b px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            لوگو
          </Link>

          <nav className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/login">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <User />
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <User />
          </Button>
        </Link>
      </div>
    </header>
  )
}
