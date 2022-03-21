import { ArrowButton, ButtonAppearance, ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

export function Button({
  appearance,
  children,
  className,
  arrow = ArrowButton.none,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == ButtonAppearance.primary,
        [styles.ghost]: appearance == ButtonAppearance.ghost,
      })}
      {...rest}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === ArrowButton.down,
            [styles.right]: arrow === ArrowButton.right,
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}
