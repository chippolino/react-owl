import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(
  (
    { className, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          {...rest}
          ref={ref}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
