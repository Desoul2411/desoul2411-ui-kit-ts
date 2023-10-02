import React, { FC, ReactNode } from "react";
import "./styles.css";

export interface IButton {
  children: ReactNode;
  color: string;
  big?: boolean;
}

const Button: FC<IButton> = ({ children, color, big, ...props }) => {
  const rootClasses = ["Button"];

  if (big) {
    rootClasses.push("ButtonBig");
  }

  return (
    <button {...props} className={rootClasses.join(" ")} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
