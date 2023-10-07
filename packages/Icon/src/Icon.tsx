import React, { FC } from "react";
import InlineSVG from "react-inlinesvg";

export interface IIcon {
  path: any;
  size?: number;
  color?: string;
}

const Icon: FC<IIcon> = ({ path, size, color }) => {
  size = size || 24;
  color = color || "black";

  return (
    //@ts-ignore
    <InlineSVG
      src={path}
      preProcessor={(code) =>
        code
          .replace(/fill=".?"/g, `fill="${color}"`)
          .replace(/width=".?"/g, `width = "${size}"`)
          .replace(/height=".*?"/g, `height = "${size}"`)
      }
      style={{ width: size, height: size, fill: color }}
    />
  );
};

export default Icon;
