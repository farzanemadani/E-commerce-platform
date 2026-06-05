import Link from 'next/link'

import { isNavGroup, navLinks } from '@/shared/config'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/shared/ui/navigation-menu'

import { HeaderNavNestedLinks } from './HeaderNavNestedLinks'

export function HeaderNav() {
  return (
    <NavigationMenu dir="rtl" className="hidden lg:flex">
      <NavigationMenuList>
        {navLinks.map((el) => {
          return isNavGroup(el) ? (
            <NavigationMenuItem key={el.label}>
              <NavigationMenuTrigger>{el.label}</NavigationMenuTrigger>
              <NavigationMenuContent dir="rtl">
                <ul className="w-44 p-2">{HeaderNavNestedLinks(el.children)}</ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={el.href}>
              <NavigationMenuLink asChild>
                <Link href={el.href}>{el.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
