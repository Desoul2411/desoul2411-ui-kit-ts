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
  size = size || 26;
  color = color || "black";

  return (
    <>
      {createElement(icons[icon], {
            style: { width: size, height: size, fill: color },
      })}
    </>
  );
};

export default Icon;
