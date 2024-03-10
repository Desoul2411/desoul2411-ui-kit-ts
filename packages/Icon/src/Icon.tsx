import React, { FC } from "react";
import InlineSVG from "react-inlinesvg";

export interface IIcon {
  src: any;
  size?: number;
  color?: string;
}

const Icon: FC<IIcon> = ({ src, size, color }) => {
  size = size || 26;
  color = color || "black";

  return (
    //@ts-ignore
    <InlineSVG
      src={src}
      style={{ width: size, height: size, fill: color }}
    />
  );
};

export default Icon;
