import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odhi7t1yzx01xxfrd03356/master',
  cache: new InMemoryCache()
});
