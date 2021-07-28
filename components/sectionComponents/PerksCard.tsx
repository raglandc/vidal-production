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
      <div className={styles.svgClass}>
        <Image src={props.svgLink} alt="svg image" />
      </div>

      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default PerksCard;
