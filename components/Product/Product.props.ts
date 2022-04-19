import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ProductModel } from "../../interfaces/product.interface";

export interface ProductProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  product: ProductModel;
}
