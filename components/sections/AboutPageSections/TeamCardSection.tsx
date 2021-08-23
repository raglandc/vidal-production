//local imports
import TeamCard from "./AboutPageComponents/TeamCard";
//images imported before component loads
import FounderPicture from "../../../public/gonz.jpg";
//styles
import styles from "./TeamCardSection.module.css";

//create all team members in the array below
const teamMembers = [
  {
    key: 1,
    name: "Chris",
    title: "Founder",
    image: FounderPicture,
    description:
      "Chris founded Vidal with the intention of building beautiful websites that demonstrate the beauty behind simplicity",
  },
];

const TeamCardSection = () => {
  return (
    <div className={styles.teamCardSectionContainer}>
      <h2 className={styles.header}>Meet The Team</h2>
      {teamMembers.map((teamMember) => {
        return (
          <TeamCard
            key={teamMember.key}
            name={teamMember.name}
            title={teamMember.title}
            image={teamMember.image}
            description={teamMember.description}
          />
        );
      })}
    </div>
  );
};

export default TeamCardSection;
