const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./typedefs')
const { resolvers } = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {},
})

module.exports = { server }
