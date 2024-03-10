import React, { FC, createElement } from "react";
import alertIcon from './icons/icon-alert.svg';
import menuIcon from './icons/icon-menu.svg';
import settingsIcon from './icons/icon-settings.svg';



const icons = {
  alert: alertIcon,
  menu: menuIcon,
  settings: settingsIcon,
}

export type IconName = keyof typeof icons;

export interface IIcon {
  icon: IconName;
  size?: number;
  color?: string;
}

const Icon: FC<IIcon> = ({ icon, size, color }) => {
  size = size || 24;
  color = color || "black";

  const SvgIcon = icons[icon];

  return (
    <SvgIcon
      style={{ fill: color, color, width: size, height: size }}
    />
  );
};

export default Icon;
