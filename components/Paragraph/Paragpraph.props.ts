import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export enum PSize {
  Small = "S",
  Large = "L",
}

export interface ParagpraphProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size: PSize;
  children: ReactNode;
}
