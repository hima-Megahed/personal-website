import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import LoaderSpinner from "./Components/LoaderSpinner";
import Routes from "./Routes/RoutesConfig";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={LoaderSpinner}>
      <HashRouter>
        <Switch>
          {Routes.map((route, index) => {
            return (
              <Route
                key={route.name}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </HashRouter>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
