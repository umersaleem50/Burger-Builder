import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import Button from "../../Components/UI/Button/Button";
import axios from "./../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Input from "../../Components/UI/Input/Input";
class ContactForm extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip-Code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "faFasteststest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props);

    this.setState({ loading: true });
    const data = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
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
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({ id: key, config: this.state.orderForm[key] });
    }

    let myForm = (
      <div className={classes.ContactForm}>
        <h3>Please Enter the Details!</h3>
        <form action="post">
          {formElementArray.map((element) => {
            return (
              <Input
                key={element.id}
                elementType={element.config.elementType}
                elementconfig={element.config.elementConfig}
                value={element.config.value}
              />
            );
          })}
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
