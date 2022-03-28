import { AdvantagesProps } from "./AdvantagesProps";
import styles from "./Advantages.module.css";
import CheckIcon from "./check.svg";

export function Advantages({ advantages }: AdvantagesProps): JSX.Element {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <p>{a.description}</p>
        </div>
      ))}
    </>
  );
}
