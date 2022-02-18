import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
          <Route render={() => <h3>404 Not found</h3>} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
