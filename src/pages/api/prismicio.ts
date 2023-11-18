import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import * as prismic from "@prismicio/client";

export const repositoryName = "johan-mouchet";

const prismicClient = prismic.createClient(
  prismic.getRepositoryEndpoint(repositoryName),
  {
    // accessToken: "",
    // routes: [],
  }
);

export const client = new ApolloClient({
  link: new HttpLink({
    uri: prismic.getGraphQLEndpoint(repositoryName),
    fetch: prismicClient.graphQLFetch,
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});
