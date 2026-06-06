'use client'
import { useRouter } from 'next/navigation'

import { LoginForm } from '@/features/auth/login/ui/LoginForm'
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
      <LoginForm />
    </RouteDialog>
  )
}
