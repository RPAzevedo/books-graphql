const gql = require('graphql-tag')

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
  }

  type Query {
    me: User!
  }
`

module.exports = { typeDefs }
