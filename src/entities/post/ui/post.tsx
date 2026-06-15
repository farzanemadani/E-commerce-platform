import Link from 'next/link'

import type { Post as PostType } from '../model/types'

export function Post({ post }: { post: PostType }) {
  return (
    <li className="col-span-1 h-40 rounded border p-4">
      <Link className="text-primary text-sm hover:underline" href={`/blog/${post.id}`}>
        {post.title}
      </Link>
      <p className="text-muted-foreground mt-2 line-clamp-6 text-xs">{post.body}</p>
    </li>
  )
}
