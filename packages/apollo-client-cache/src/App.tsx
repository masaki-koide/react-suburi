import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql'
import { Home } from './Home'

export const App = () => (
  <ApolloProvider client={client}>
    <h1>Apollo Client Cache</h1>
    <Home />
  </ApolloProvider>
)
