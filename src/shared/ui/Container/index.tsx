import { cn } from '@/shared/lib/utils'
export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto px-4 lg:px-6', className)}>{children}</div>
}
