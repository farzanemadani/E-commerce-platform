import { queryOptions } from '@tanstack/react-query'

import { getPost } from './get-post'
import { getPosts } from './get-posts'

export const postQueries = {
  all: () =>
    queryOptions({
      queryKey: ['posts'],
      queryFn: getPosts,
    }),
  detail: (id: number) =>
    queryOptions({
      queryKey: ['posts', id],
      queryFn: () => getPost(id),
    }),
}
