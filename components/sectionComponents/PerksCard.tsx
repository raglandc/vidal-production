//libaray imports
import Image from "next/image";

//styles
import styles from "./PerksCard.module.css";

type PerksCardProps = {
  key: string;
  svgLink: StaticImageData;
  description: string;
  title: string;
};

const PerksCard = (props: PerksCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.svgClass}>
        <Image src={props.svgLink} alt="svg image" />
      </div>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default PerksCard;
