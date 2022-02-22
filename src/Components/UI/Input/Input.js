import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input className={classes.InputElement} {...props.elementconfig} />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea className={classes.InputElement} {...props.elementconfig} />
      );
      break;
    case "select":
      inputElement = (
        <select className={classes.InputElement} value={props.value}>
          {props.elementconfig.options.map((option, i) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input className={classes.InputElement} {...props.elementconfig} />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
