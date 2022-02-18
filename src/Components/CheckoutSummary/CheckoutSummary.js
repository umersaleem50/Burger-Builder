import React, { Component } from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";

class CheckoutSummary extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1,
    },
  };

  render() {
    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope this burger taste good!</h1>
        <div>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <Button btnType="Danger" clicked={this.props.orderCanceled}>
          CANCEL
        </Button>
        <Button btnType="Sucess" clicked={this.props.orderContinued}>
          CONTINUE
        </Button>
      </div>
    );
  }
}

export default withRouter(CheckoutSummary);
