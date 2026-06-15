import { Container } from '@/shared/ui/Container'
import { Skeleton } from '@/shared/ui/skeleton'

export default function BlogPostLoading() {
  return (
    <Container>
      <article>
        <Skeleton className="h-8 w-3/4" />

        <Skeleton className="mt-4 h-3 w-full" />
        <Skeleton className="mt-4 h-3 w-full" />
        <Skeleton className="mt-4 h-3 w-5/6" />
        <Skeleton className="mt-4 h-3 w-full" />
      </article>
    </Container>
  )
}
