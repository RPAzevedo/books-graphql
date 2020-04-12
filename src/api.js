const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
  }

  type Query {
    me: User!
  }
`

const resolvers = {
  Query: {
    me() {
      return {
        id: 1,
        name: 'Rafael Azevedo',
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})
// eslint-disable-next-line no-console
server.listen(4000).then(({ url }) => console.log(`Apollo GraphQL Server is running at ${url}`))
