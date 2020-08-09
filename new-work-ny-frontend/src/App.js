import React from "react";
import "./App.css";
import Home from "./containers/home/Home";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SULIParallax from "./containers/SignUpLogIn/SULIParallax";
import "antd/dist/antd.css";
import Dashboard from "./containers/dashboard/Dashboard";

const store = configureStore();

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
