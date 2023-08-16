import React, { FC } from "react";
import { toUppercase } from "../../../utils/formatters.utils";
import styles from "./styles.css";

export interface IInput {
  big?: boolean;
  placeholder?: string;
  label: string;
}

const Input: FC<IInput> = ({ big, placeholder, label, ...props }) => {
  const rootClasses = [styles.Input];

  if (big) {
    rootClasses.push(styles.BigInput);
  }

  return (
    <label>
      {label}
      {toUppercase(label)}
      <input
        {...props}
        className={rootClasses.join(" ")}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
