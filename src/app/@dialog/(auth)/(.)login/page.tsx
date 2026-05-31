'use client'
import { useRouter } from 'next/navigation'

import { RouteDialog } from '@/shared/ui/RouteDialog'
export default function LoginDialog() {
  const router = useRouter()

  return (
    <RouteDialog
      title="ورود"
      description="به حساب کاربری خود وارد شوید"
      route="/login"
      onClose={() => router.replace('/')}
    >
      <div>dialog page</div>
    </RouteDialog>
  )
}
