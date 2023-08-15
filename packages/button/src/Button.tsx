import React, { FC, ReactNode } from "react";
import "./Button.css";

export interface IButton {
  children: ReactNode;
  color: string;
  big?: boolean;
}

const Button: FC<IButton> = ({ children, color, big, ...props }) => {
  const rootClasses = ["button"];

  if (big) {
    rootClasses.push("big-btn");
  }

  return (
    <button {...props} className={rootClasses.join(" ")} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
