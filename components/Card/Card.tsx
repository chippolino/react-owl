import { cardColor, CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";

export function Card({
  color = cardColor.White,
  className,
  children,
  ...rest
}: CardProps): JSX.Element {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === cardColor.Blue,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
