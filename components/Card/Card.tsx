import { cardColor, CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(
  (
    { color = cardColor.White, className, children, ...rest }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color === cardColor.Blue,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
