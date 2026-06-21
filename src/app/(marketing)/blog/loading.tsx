import { Container } from '@/shared/ui/Container'
import { Skeleton } from '@/shared/ui/skeleton'

export default function Loading() {
  return (
    <Container>
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} className="col-span-1 h-40 rounded border p-4">
            <Skeleton className="mt-3 h-4 w-1/2" />
            <Skeleton className="mt-2 h-4 w-3/4" />
            <Skeleton className="mt-2 h-4 w-3/4" />
            <Skeleton className="mt-2 h-4 w-3/4" />
          </li>
        ))}
      </ul>
    </Container>
  )
}
