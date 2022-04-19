import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export enum SortEnum {
  Rating,
  Price,
}

export interface SortProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}
