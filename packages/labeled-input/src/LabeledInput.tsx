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
    console.log("test labeled input");
  }

  return (
    <label>
      {toUppercase(label)}
      <Input big={big} placeholder={placeholder} />
    </label>
  );
};

export default LabeledInput;
