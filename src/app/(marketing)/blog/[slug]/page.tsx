import { notFound } from 'next/navigation'

import { PostDetail } from '@/widgets/post-detail'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const id = Number(slug)

  if (isNaN(id)) notFound()

  return <PostDetail id={id} />
}
