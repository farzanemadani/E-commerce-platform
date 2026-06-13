import { queryOptions } from '@tanstack/react-query'

import { getPosts } from './get-posts'

export const postQueries = {
  all: () =>
    queryOptions({
      queryKey: ['posts'],
      queryFn: getPosts,
    }),
}
