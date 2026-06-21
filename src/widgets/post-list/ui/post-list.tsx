import { getPosts, Post } from '@/entities/post'
import { Container } from '@/shared/ui/Container'

export async function PostList() {
  const posts = await getPosts()
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
