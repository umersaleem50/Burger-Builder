import React, { Component } from "react";
import classes from "./Orders.module.css";
import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    const orders = [];
    this.setState({ loading: false });
    axios
      .get("/orders.json")
      .then((res) => {
        for (let key in res.data) {
          orders.push({ ...res.data[key], id: key });
        }
        console.log(orders);
        this.setState({ orders: orders });
      })
      .catch((err) => this.setState({ loading: false }));
  }

  render() {
    const renderOrder = this.state.orders.map((el, i) => {
      return (
        <Order ingredients={el.ingredients} key={el.id} price={el.totalPrice} />
      );
    });

    return <div className={classes.Orders}>{renderOrder}</div>;
  }
}

export default withErrorHandler(Orders, axios);
