import React, { FC, ReactNode } from "react";
import styles from "./styles.css";

export interface IButton {
  children: ReactNode;
  color: string;
  big?: boolean;
}

const Button: FC<IButton> = ({ children, color, big, ...props }) => {
  const rootClasses = [styles.Button];

  if (big) {
    rootClasses.push(styles.ButtonBig);
  }

  return (
    <button {...props} className={rootClasses.join(" ")} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
