import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
	uri: "wss://wahyuhr-query-apollo.hasura.app/v1/graphql",
	options: {
		reconnect: true,
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"zHHZrC7K5vwiFyiJez7emtWAU8ki5bi0EJ5tP7hJFXQ6U1NN9e2tGV8cFMYWaVnq",
			},
		},
	},
});

const httpLink = new HttpLink({
	uri: "https://wahyuhr-query-apollo.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"zHHZrC7K5vwiFyiJez7emtWAU8ki5bi0EJ5tP7hJFXQ6U1NN9e2tGV8cFMYWaVnq",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;