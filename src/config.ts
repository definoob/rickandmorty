import {ApolloClient, InMemoryCache} from '@apollo/client/core';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql',
});
