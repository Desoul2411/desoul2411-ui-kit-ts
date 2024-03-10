import React, { FC } from "react";
/* import InlineSVG from "react-inlinesvg"; */
import { HandySvg } from 'handy-svg';
import settingsIcon from "./icons/icon-settings.svg";
import alertIcon from './icons/icon-alert.svg';
import menuIcon from './icons/icon-menu.svg';

const icons = {
  settings: settingsIcon,
  alert: alertIcon,
  menu: menuIcon,
};

type Icon = "settings" | "menu" | "alert";

export interface IIcon {
  name: Icon;
  size?: number;
  color?: string;
}

const Icon: FC<IIcon> = ({ name, size, color }) => {
  size = size || 26;
  color = color || "black";

  const icon = icons[name];

  return (
  <HandySvg
    // @ts-ignore
    src={icon}
    className="icon"
    width="32"
    height="32"
    // @ts-ignore
    style={{ width: size, height: size, color }}
/>
  );
};

export default Icon;
