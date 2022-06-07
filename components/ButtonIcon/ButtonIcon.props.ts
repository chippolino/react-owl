import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "./up.svg";
import close from "./cross.svg";
import menu from "./menu.svg";

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export enum ButtonIconAppearance {
  primary = "primary",
  white = "white",
}

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
  appearance: ButtonIconAppearance;
}
