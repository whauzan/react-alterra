import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://wahyuhr-query-apollo.hasura.app/v1/graphql',
    headers: {
    'x-hasura-admin-secret': 'zHHZrC7K5vwiFyiJez7emtWAU8ki5bi0EJ5tP7hJFXQ6U1NN9e2tGV8cFMYWaVnq'
    },
    cache: new InMemoryCache(),
})

export default client;