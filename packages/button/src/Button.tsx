import React, { FC, ReactNode } from "react";
import "./styles.css";

export interface IButton {
  children: ReactNode;
  color?: string;
  borderColor?: string;
  big?: boolean;
}

const Button: FC<IButton> = ({
  children,
  color,
  borderColor,
  big,
  ...props
}) => {
  const rootClasses = ["Button"];

  if (big) {
    rootClasses.push("ButtonBig");
  }

  return (
    <button
      {...props}
      className={rootClasses.join(" ")}
      style={{ color, borderColor }}
    >
      {children}
    </button>
  );
};

export default Button;
