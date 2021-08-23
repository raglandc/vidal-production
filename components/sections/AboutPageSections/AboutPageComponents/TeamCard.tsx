//library
import image from "next/image";
import Image from "next/image";

//local

import profilePic from "../../../../public/gonz.jpg";
//styles

import styles from "./TeamCard.module.css";

type TeamCardType = {
  title: string;
  image: string;
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
            src={profilePic}
            alt="team member picture"
            width="162px"
            height="150px"
          />
          <h4 className={styles.name}>{props.name}</h4>
        </div>
        <h4 className={styles.title}>Founder</h4>
      </div>
      <p className={styles.cardDescription}>
        This is just a basic text used to describe what the card is basically
        going to look like. Just filling up space to get a basic idea of how
        much to type.
      </p>
    </div>
  );
};

export default TeamCard;
