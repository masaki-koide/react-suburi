import { ApolloClient, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: relayStylePagination(['query']),
          now() {
            return new Date().toISOString()
          }
        }
      }
    }
  }),
  uri: process.env.LOCAL_MOCK_SERVER_PORT
    ? `http://localhost:${process.env.LOCAL_MOCK_SERVER_PORT}/graphql`
    : 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`
  }
})
