import { ParagpraphProps, PSize } from "./Paragpraph.props";
import styles from "./Parapgraph.module.css";
import cn from "classnames";

export function Paragraph({
  size,
  children,
  ...rest
}: ParagpraphProps): JSX.Element {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === PSize.Small,
        [styles.large]: size === PSize.Large,
      })}
      {...rest}
    >
      {children}
    </p>
  );
}
