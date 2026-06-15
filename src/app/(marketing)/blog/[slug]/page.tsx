import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { notFound } from 'next/navigation'

import { postQueries } from '@/entities/post'
import { PostDetail } from '@/widgets/post-detail'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const id = Number(slug)

  if (isNaN(id)) notFound()

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(postQueries.detail(id))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetail id={id} />
    </HydrationBoundary>
  )
}
