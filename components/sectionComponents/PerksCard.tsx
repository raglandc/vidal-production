//libaray imports
import Image from "next/image";

//styles
import styles from "./PerksCard.module.css";

type PerksCardProps = {
  key: string;
  svgLink: StaticImageData;
  description: string;
};

const PerksCard = (props: PerksCardProps) => {
  return (
    <div className={styles.card}>
      <Image className={styles.svgClass} src={props.svgLink} alt="svg image" />

      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default PerksCard;
