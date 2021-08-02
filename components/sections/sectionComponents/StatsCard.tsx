//local imports
import { useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

//styles
import styles from "./StatsCard.module.css";

type StatsCardProp = {
  key: string;
  description: string;
  source: string;
};

const StatsCard = (props: StatsCardProp) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref} className={isVisible ? styles.card : styles.start}>
      <q className={styles.quote}>{props.description}</q>
      <span className={styles.source}>{props.source}</span>
    </div>
  );
};

export default StatsCard;
