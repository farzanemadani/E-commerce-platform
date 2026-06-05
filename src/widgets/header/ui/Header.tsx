import { User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/shared/ui/button'

import { HeaderNav } from './HeaderNav'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="border-b px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <MobileMenu />
          <Link href="/" className="text-xl font-bold">
            لوگو
          </Link>

          <HeaderNav />
        </div>
        <div className="flex gap-3">
          <Link href="/login">
            <Button variant="outline" size="icon" className="cursor-pointer">
              <User />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
