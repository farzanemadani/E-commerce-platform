'use client'
import { useQuery } from '@tanstack/react-query'

import { postQueries } from '@/entities/post'
import { Container } from '@/shared/ui/Container'

interface PostDetailProps {
  id: number
}
export function PostDetail({ id }: PostDetailProps) {
  const { data: post } = useQuery(postQueries.detail(id))
  if (!post) return
  return (
    <Container>
      <article>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-muted-foreground mt-4 text-xs">{post.body}</p>
        <p className="text-muted-foreground mt-4 text-xs">{post.body}</p>
        <p className="text-muted-foreground mt-4 text-xs">{post.body}</p>
        <p className="text-muted-foreground mt-4 text-xs">{post.body}</p>
      </article>
    </Container>
  )
}
