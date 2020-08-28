import { MockList } from '@graphql-tools/mock'

export const mocks = {
  Int: () => 100,
  SearchResultItemConnection: () => ({
    edges: () => new MockList(10),
    pageInfo: {
      hasNextPage: true
    }
  }),
  Repository: () => ({
    id: 'hoge',
    url: 'https://github.com/hoge/fuga',
    nameWithOwner: 'hoge/fuga',
  })
}
