import React, { FC } from "react";
import styles from "./styles.css";

export interface IInput {
  big?: boolean;
  borderColor?: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({ big, placeholder, borderColor, ...props }) => {
  const rootClasses = [styles.Input];

  console.log("add");

  if (big) {
    rootClasses.push(styles.BigInput);
  }

  return (
    <input
      {...props}
      className={rootClasses.join(" ")}
      placeholder={placeholder}
      style={{ borderColor }}
    />
  );
};

export default Input;
