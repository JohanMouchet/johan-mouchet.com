import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect } from "wouter";
import { Home, NotFound } from "views/pages";
import * as serviceWorker from "serviceWorker";

ReactDOM.render(
  <Switch>
    <Route path="/">{Home}</Route>
    <Route path="/storybook/*">
      <Redirect to="/storybook/index.html" />
    </Route>
    <Route path="/:rest*">{NotFound}</Route>
  </Switch>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
