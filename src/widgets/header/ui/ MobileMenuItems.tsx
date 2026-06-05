import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import { isNavGroup } from '@/shared/config'
import { cn } from '@/shared/lib/utils'

import { MobileMenuItemsProps } from './types'

export function MobileMenuItems({
  items,
  openItems,
  onToggle,
  parentKey = '',
}: MobileMenuItemsProps) {
  return items.map((link) => {
    const itemKey = `${parentKey}/${link.label}`

    if (isNavGroup(link)) {
      const isOpen = openItems.has(itemKey)

      return (
        <div key={itemKey}>
          <button
            type="button"
            className="flex cursor-pointer items-center text-sm text-gray-600 hover:text-black"
            onClick={() => onToggle(itemKey)}
          >
            {link.label}
            <ChevronDown
              className={cn('mx-2 w-4 transition-all', {
                'rotate-180': isOpen,
              })}
            />
          </button>

          {isOpen && (
            <div className="mt-2 mr-4 flex flex-col gap-2">
              <MobileMenuItems
                items={link.children}
                openItems={openItems}
                onToggle={onToggle}
                parentKey={itemKey}
              />
            </div>
          )}
        </div>
      )
    }

    return (
      <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-black">
        {link.label}
      </Link>
    )
  })
}
