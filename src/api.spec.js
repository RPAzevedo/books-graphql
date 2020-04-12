const { ApolloServer, gql } = require('apollo-server')
const { createTestClient } = require('apollo-server-testing')
const { typeDefs } = require('./typedefs')
const { resolvers } = require('./resolvers')

const createTestServer = (ctx) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ctx,
  })

  return createTestClient(server)
}

const context = () => {}
const { query } = createTestServer(context)

describe('Query ME', () => {
  const QUERY = gql`
    {
      me {
        id
        name
      }
    }
  `

  it('succeeds and returns me', async () => {
    const response = await query({ query: QUERY })
    expect(response.errors).toBeUndefined
    expect(response.data).toEqual({ me: { id: 1, name: 'Rafael Azevedo' } })
  })
})
