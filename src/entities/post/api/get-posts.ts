import type { Post } from '../model/types'

import { MOCK_POSTS } from './__mocks__/posts.mock'
export async function getPosts(): Promise<Post[]> {
  return MOCK_POSTS
}
