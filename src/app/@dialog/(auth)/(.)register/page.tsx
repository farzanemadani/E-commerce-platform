'use client'
import { useRouter } from 'next/navigation'

import { RouteDialog } from '@/shared/ui/RouteDialog'
export default function RegisterDialog() {
  const router = useRouter()
  return (
    <RouteDialog
      title="ثبت نام"
      description="حساب کاربری خود را ثیت نام کنید"
      route="/register"
      onClose={() => router.replace('/')}
    >
      <div>register dialog page</div>
    </RouteDialog>
  )
}
