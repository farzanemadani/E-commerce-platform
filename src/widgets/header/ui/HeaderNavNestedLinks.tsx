import Link from 'next/link'

import { isNavGroup, type NavGroup } from '@/shared/config'
import { NavigationMenuLink } from '@/shared/ui/navigation-menu'

export function HeaderNavNestedLinks(items: NavGroup['children']) {
  return items.map((item) => {
    if (isNavGroup(item)) {
      return (
        <li key={item.label} className="space-y-1">
          <span className="text-muted-foreground block px-2 py-1 text-xs font-medium">
            {item.label}
          </span>
          <ul className="mr-3 border-r pr-2">{HeaderNavNestedLinks(item.children)}</ul>
        </li>
      )
    }

    return (
      <li key={item.href}>
        <NavigationMenuLink asChild>
          <Link href={item.href}>{item.label}</Link>
        </NavigationMenuLink>
      </li>
    )
  })
}
