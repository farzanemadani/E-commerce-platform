import Link from 'next/link'

import { navLinks } from '@/shared/config'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/shared/ui/navigation-menu'

function HeaderNav() {
  return (
    <NavigationMenu dir="rtl" className="hidden lg:flex">
      <NavigationMenuList>
        {navLinks.map((el, i) => {
          return el.children ? (
            <NavigationMenuItem key={`item-${i}`}>
              <NavigationMenuTrigger>{el.label}</NavigationMenuTrigger>
              {el.children && (
                <NavigationMenuContent dir="rtl">
                  <ul className="w-38 p-2">
                    {el.children.map((item, j) => {
                      return (
                        <li key={j} className="mb-2">
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`item-${i}`}>
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

export default HeaderNav
