import styles from "./Up.module.css";
import ArrowIcon from "./up.svg";
import { useScrollY } from "../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function Up(): JSX.Element {
  const controls = useAnimation();

  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ArrowIcon />
    </motion.button>
  );
}
