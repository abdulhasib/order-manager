import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
	uri: 'https://shisha-order-manager-api.herokuapp.com/v1/graphql'
})

// Create the apollo client
export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: true
})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient
})

Vue.use(VueApollo)

export default apolloProvider
