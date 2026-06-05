export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'خانه', href: '/' },
  {
    label: 'درباره ما',
    href: '/about',
    children: [
      { label: 'تیم ما', href: '/about/team' },
      { label: 'تاریخچه', href: '/about/history' },
    ],
  },
  { label: 'تماس با ما', href: '/contact' },
]
