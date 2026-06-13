import type { Post as PostType } from '../model/types'

export function Post({ post }: { post: PostType }) {
  return (
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  )
}
