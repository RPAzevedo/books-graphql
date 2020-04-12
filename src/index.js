const { server } = require('./api')

// eslint-disable-next-line no-console
server.listen(4000).then(({ url }) => console.log(`Apollo GraphQL Server is running at ${url}`))
