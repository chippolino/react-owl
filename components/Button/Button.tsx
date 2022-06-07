import { ArrowButton, ButtonAppearance, ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function Button({
  appearance,
  children,
  className,
  arrow = ArrowButton.none,
  ...rest
}: ButtonProps): JSX.Element {
  const scale = useMotionValue(1);

  useEffect(() => {
    scale.onChange((s) => console.log(s));
  }, []);
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearance == ButtonAppearance.primary,
        [styles.ghost]: appearance == ButtonAppearance.ghost,
      })}
      style={{ scale }}
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
    </motion.button>
  );
}
