import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export enum cardColor {
  White = "White",
  Blue = "Blue",
}

export interface CardProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: cardColor;
  children: ReactNode;
}
