export type NavHref = `/${string}`

export interface NavLink {
  label: string
  href: NavHref
  children?: never
}

export interface NavGroup {
  label: string
  children: readonly [NavItem, ...NavItem[]]
  href?: never
}

export type NavItem = NavLink | NavGroup

export function isNavGroup<T extends NavItem>(item: T): item is Extract<T, NavGroup> {
  return 'children' in item
}

export const navLinks = [
  { label: 'خانه', href: '/' },
  {
    label: 'درباره ما',
    children: [
      { label: 'تیم ما', href: '/about/team' },
      { label: 'تاریخچه', href: '/about/history' },
    ],
  },
  { label: 'تماس با ما', href: '/contact' },
] as const satisfies readonly NavItem[]
