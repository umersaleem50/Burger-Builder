import React, { Component } from "react";
import CheckoutSummary from "../../Components/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactForm from "../Contact form/ContactForm";
class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0,
  };

  componentDidMount() {
    const ingredients = {};
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    let totalPrice = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        totalPrice = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState({ ingredients: ingredients, totalPrice: totalPrice });
  }

  orderContinuedHandler() {
    this.props.history.replace(this.props.match.url + "/contact-data");
  }

  orderCanceledHandler() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          orderContinued={this.orderContinuedHandler.bind(this)}
          orderCanceled={this.orderCanceledHandler.bind(this)}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={(props) => (
            <ContactForm
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
