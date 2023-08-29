import React, { FC } from "react";
import styles from "./styles.css";

export interface IInput {
  big?: boolean;
  placeholder?: string;
}

const Input: FC<IInput> = ({ big, placeholder, ...props }) => {
  const rootClasses = [styles.Input];

  if (big) {
    rootClasses.push(styles.BigInput);
  }

  return (
    <input
      {...props}
      className={rootClasses.join(" ")}
      placeholder={placeholder}
    />
  );
};

export default Input;
