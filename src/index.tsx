import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

import Pages from "./pages";
import Login from "./pages/login";
import injectStyles from "./styles";
import { cache } from "./cache";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  headers: {
    "client-name": "Hondana [web]",
    "client-version": "1.0.0",
  },
  resolvers: {},
});

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>{/* <IsLoggedIn /> */}s</ApolloProvider>,
  document.getElementById("root")
);
