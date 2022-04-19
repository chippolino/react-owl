import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export enum TagSize {
  Small = "S",
  Mid = "M",
}

export interface TagProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: TagSize;
  children: ReactNode;
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}
