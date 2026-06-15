import { cn } from '@/shared/lib/utils'
export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto px-6 py-8', className)}>{children}</div>
}
