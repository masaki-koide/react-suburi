import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { addMocksToSchema } from '@graphql-tools/mock'
import { buildClientSchema } from 'graphql'

import introspection from '../generated/introspection.json'
import { mocks } from './mocks'

const port = process.env.LOCAL_MOCK_SERVER_PORT || '4000'

const schema = buildClientSchema(introspection as any)
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks
})

const app = express()

app.use(
  '/graphql',
  cors(),
  graphqlHTTP({
    schema: schemaWithMocks,
    graphiql: true
  })
)

app.listen(port, () => {
  console.log(`Mock Server is running at http://localhost:${port}`)
})
