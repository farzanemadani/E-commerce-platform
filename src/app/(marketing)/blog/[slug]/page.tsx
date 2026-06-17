import { notFound } from 'next/navigation'

import { getPosts } from '@/entities/post'
import { PostDetail } from '@/widgets/post-detail'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: String(post.id) }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const id = Number(slug)

  if (isNaN(id)) notFound()

  return <PostDetail id={id} />
}
