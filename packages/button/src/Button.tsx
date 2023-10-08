import React, { FC, ReactNode } from "react";
import "./styles.css";

export interface IButton {
  children: ReactNode;
  onClick: () => void;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  big?: boolean;
}

const Button: FC<IButton> = ({
  children,
  color,
  backgroundColor,
  borderColor,
  big,
  onClick,
  ...props
}) => {
  console.log("log 1");

  const rootClasses = ["Button"];

  if (big) {
    rootClasses.push("ButtonBig");
  }

  return (
    <button
      {...props}
      className={rootClasses.join(" ")}
      style={{ color, borderColor, backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
