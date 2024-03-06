import React, { FC, SVGProps } from "react";
import InlineSVG from "react-inlinesvg";
import settingsIcon from "./icons/settings.svg";
import alertIcon from './icons/icon-alert.svg';
import menuIcon from './icons/icon-menu.svg';

const icons = {
  settings: settingsIcon,
  alert: alertIcon,
  menu: menuIcon,
};

export interface IIcon {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const Icon: FC<IIcon> = ({ name, size, color }) => {
  size = size || 26;
  color = color || "black";

  const icon:  React.FC<SVGProps<SVGElement>>  = icons[name];

  return (
    //@ts-ignore
    <InlineSVG
    src={icon as unknown as string}
      style={{ width: size, height: size, color }}
    />
  );
};

export default Icon;
