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

module.exports = { resolvers }
