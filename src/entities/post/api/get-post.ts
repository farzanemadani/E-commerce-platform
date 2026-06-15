import type { Post } from '../model/types'

import { MOCK_POSTS } from './__mocks__/posts.mock'
export async function getPost(id: number): Promise<Post> {
  const post = MOCK_POSTS.find((p) => p.id === id)

  if (!post) throw new Error(`Post with id ${id} not found`)

  return post
}
