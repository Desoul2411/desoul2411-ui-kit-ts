import React, { FC } from "react";
//import { toUppercase } from "../../../utils/formatters.utils";
import { toUppercase } from "@desoul2411/utils";
import { Input } from "@desoul2411/input";
import styles from "./styles.css";

export interface ILabeledInput {
  big?: boolean;
  placeholder?: string;
  label: string;
}

const LabeledInput: FC<ILabeledInput> = ({
  big,
  placeholder,
  label,
  ...props
}) => {
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
      <Input big={big} placeholder={placeholder} />
    </label>
  );
};

export default LabeledInput;
