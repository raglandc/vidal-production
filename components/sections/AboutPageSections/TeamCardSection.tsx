//local imports
import TeamCard from "./AboutPageComponents/TeamCard";
import FounderPicture from "../../../public/gonz.jpg";
//styles
import styles from "./TeamCardSection.module.css";

const TeamCardSection = () => {
  return (
    <div className={styles.teamCardSectionContainer}>
      <h2 className={styles.header}>Meet The Team</h2>
      <TeamCard
        name="Chris"
        title="Founder"
        image={FounderPicture}
        description="yayo"
      />
    </div>
  );
};

export default TeamCardSection;
