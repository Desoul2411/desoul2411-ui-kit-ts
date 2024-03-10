import React, { FC } from "react";
import { toUppercase } from "@desoul2411/utils";
import { Input } from "@desoul2411/input";
import styles from "./styles.module.css";

export interface ILabeledInput {
  borderColor?: string;
  big?: boolean;
  capitalizedLabel?: boolean;
  placeholder?: string;
  label: string;
}

const LabeledInput: FC<ILabeledInput> = ({
  borderColor,
  big,
  capitalizedLabel,
  placeholder,
  label,
  ...props
}) => (
  <div className={styles.LabelWrapper}>
    <label className={styles.Label}>
      {capitalizedLabel ? toUppercase(label) : label}
    </label>
    <Input
      big={big}
      borderColor={borderColor}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default LabeledInput;
