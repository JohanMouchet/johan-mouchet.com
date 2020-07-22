import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
// @ts-ignore
import { PrismicLink } from "apollo-link-prismic";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Switch, Route } from "wouter";
import "assets/styles/_styles.scss";
import { Home, NotFound } from "views/pages";
import * as serviceWorker from "serviceWorker";

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://johan-mouchet.prismic.io/graphql",
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Switch>
    <Route path="/">
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </Route>
    <Route path="/:rest*">
      <NotFound />
    </Route>
  </Switch>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
