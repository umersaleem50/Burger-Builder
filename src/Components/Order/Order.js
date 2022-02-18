import React from "react";
import classes from "./Order.module.css";
const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const IngredientsOutput = ingredients.map((el, key) => {
    return (
      <span
        key={el.name}
        style={{ padding: "5px", margin: "0 5px", border: "1px solid #ccc" }}
      >
        {el.name} : ({el.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {IngredientsOutput}</p>
      <p>
        Price: <strong>{Number.parseFloat(props.price).toFixed(2)} USD</strong>
      </p>
    </div>
  );
};

export default Order;
