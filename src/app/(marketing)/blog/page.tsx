import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

import { postQueries } from '@/entities/post'
import { PostList } from '@/widgets/post-list'

export default async function BlogPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(postQueries.all())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostList />
    </HydrationBoundary>
  )
}
