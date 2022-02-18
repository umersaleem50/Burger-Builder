import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import Button from "../../Components/UI/Button/Button";
import axios from "./../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    address: {
      street: "",
      postCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props);

    this.setState({ loading: true });
    const data = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      customer: {
        name: "Max millian",
        address: {
          street: "123 block 1",
          house: "225",
          city: "lahore",
        },
      },
      dilerver: "fastest",
    };
    axios
      .post("/orders.json", data)
      .then((response) => {
        this.props.history.replace("/");
        this.setState({ loading: false });
      })
      .catch((error) => this.setState({ loading: false }));
    // alert("You continue!");
  };

  render() {
    let myForm = (
      <div className={classes.ContactForm}>
        <h3>Please Enter the Details!</h3>
        <form action="post">
          <input type="text" placeholder="Enter Name" name="name" />
          <input type="text" placeholder="Enter Emai" name="mail" />
          <input type="text" placeholder="Enter Contact" name="contact" />
          <input type="text" placeholder="Enter Street" name="street" />
          <input type="text" placeholder="Enter PostCode" name="postCode" />
          <Button btnType="Sucess" clicked={this.orderHandler}>
            Submit
          </Button>
        </form>
      </div>
    );
    if (this.state.loading) {
      myForm = <Spinner />;
    }
    return myForm;
  }
}
export default ContactForm;
