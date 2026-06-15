'use client'
import { useQuery } from '@tanstack/react-query'

import { Post, postQueries } from '@/entities/post'
import { Container } from '@/shared/ui/Container'
import { Spinner } from '@/shared/ui/spinner'

export function PostList() {
  const { data: posts = [], isPending, isError } = useQuery(postQueries.all())

  if (isPending) return <Spinner />
  if (isError) return <p>خطا در دریافت پست‌ها</p>

  return (
    <Container>
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </Container>
  )
}
