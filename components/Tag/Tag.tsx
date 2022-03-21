import { TagProps, TagSize } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export function Tag({
  size = TagSize.Small,
  children,
  color = "ghost",
  className,
  href,
  ...rest
}: TagProps): JSX.Element {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.small]: size === TagSize.Small,
        [styles.mid]: size === TagSize.Mid,
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.grey]: color === "gray",
        [styles.primary]: color === "primary",
      })}
      {...rest}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
}
