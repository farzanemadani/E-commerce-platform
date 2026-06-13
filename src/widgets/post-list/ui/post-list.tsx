'use client'
import { useQuery } from '@tanstack/react-query'

import { Post, postQueries } from '@/entities/post'

export function PostList() {
  const { data: posts = [], isPending, isError } = useQuery(postQueries.all())

  if (isPending) return <p>در حال بارگذاری...</p>
  if (isError) return <p>خطا در دریافت پست‌ها</p>

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}
