import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ReviewFormProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  productId: string;
  isOpened: boolean;
}
