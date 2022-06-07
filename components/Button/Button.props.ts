import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export enum ButtonAppearance {
  primary = "primary",
  ghost = "ghost",
}

export enum ArrowButton {
  right = "right",
  down = "down",
  none = "none",
}

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
  > {
  children: ReactNode;
  appearance: ButtonAppearance;
  arrow?: ArrowButton;
}
