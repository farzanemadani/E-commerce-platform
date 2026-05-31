'use client'
import { usePathname, useRouter } from 'next/navigation'

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/shared/ui/dialog'

import { RouteDialogProps } from './type'

export function RouteDialog({ children, title, description, onClose, route }: RouteDialogProps) {
  const router = useRouter()
  const pathname = usePathname()

  const open = pathname === route
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) return
    onClose ? onClose() : router.back()
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
        {children}
      </DialogContent>
    </Dialog>
  )
}
