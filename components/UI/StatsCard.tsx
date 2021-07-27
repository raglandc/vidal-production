//styles
import styles from "./StatsCard.module.css";

type StatsCardProp = {
  key: string;
  description: string;
  source: string;
};

const StatsCard = (props: StatsCardProp) => {
  return (
    <div className={styles.card}>
      <q className={styles.quote}>{props.description}</q>
      <span className={styles.source}>{props.source}</span>
    </div>
  );
};

export default StatsCard;
