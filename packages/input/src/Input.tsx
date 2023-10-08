import React, { FC } from "react";
import "./styles.css";

export interface IInput {
  big?: boolean;
  borderColor?: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({ big, placeholder, borderColor, ...props }) => {
  const rootClasses = ["Input"];

  if (big) {
    rootClasses.push("BigInput");
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
