import { NavItem } from '@/shared/config'

export interface MobileMenuItemsProps {
  items: readonly NavItem[]
  openItems: ReadonlySet<string>
  onToggle: (key: string) => void
  parentKey?: string
}
