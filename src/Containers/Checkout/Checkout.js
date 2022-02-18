import React, { Component } from "react";
import CheckoutSummary from "../../Components/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount() {
    const ingredients = {};
    console.log(this.props.location.search);
    const query = new URLSearchParams(this.props.location.search);

    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
      console.log(ingredients);
    }
    console.log(ingredients);
    this.setState({ ingredients: ingredients });
  }

  orderContinuedHandler() {
    console.log(this.props);
    this.props.history.replace("/checkout/contact-data");
  }

  orderCanceledHandler() {
    this.props.history.goBack();
  }

  render() {
    return (
      <CheckoutSummary
        ingredients={this.state.ingredients}
        orderContinued={this.orderContinuedHandler.bind(this)}
        orderCanceled={this.orderCanceledHandler.bind(this)}
      />
    );
  }
}

export default Checkout;
