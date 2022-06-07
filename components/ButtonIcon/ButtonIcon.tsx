import {
  ButtonIconAppearance,
  ButtonIconProps,
  icons,
} from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export function ButtonIcon({
  appearance,
  className,
  icon,
  ...rest
}: ButtonIconProps): JSX.Element {
  const IconComponent = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == ButtonIconAppearance.primary,
        [styles.white]: appearance == ButtonIconAppearance.white,
      })}
      {...rest}
    >
      <IconComponent />
    </button>
  );
}
