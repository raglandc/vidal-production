//library
import Image from "next/image";
//styles
import styles from "./TeamCard.module.css";

type TeamCardType = {
  key: number;
  title: string;
  image: StaticImageData;
  name: string;
  description: string;
};

const TeamCard = (props: TeamCardType) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardIntro}>
          <Image
            className={styles.image}
            src={props.image}
            alt="team member picture"
            width={300}
            height={200}
          />
          <h4 className={styles.name}>{props.name}</h4>
        </div>
        <h4 className={styles.title}>{props.title}</h4>
      </div>
      <p className={styles.cardDescription}>{props.description}</p>
    </div>
  );
};

export default TeamCard;
