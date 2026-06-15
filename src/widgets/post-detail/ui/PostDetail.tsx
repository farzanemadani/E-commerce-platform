import { getPost } from '@/entities/post/api/get-post'
import { Container } from '@/shared/ui/Container'

interface PostDetailProps {
  id: number
}
export async function PostDetail({ id }: PostDetailProps) {
  const post = await getPost(id)
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
