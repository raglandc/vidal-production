//local import
import TeamCard from "./AboutPageComponents/TeamCard";
//images imported before component loads
import PresidentPicture from "../../../public/images/about/presidentVidal.jpg";
import EngineerPicture from "../../../public/images/about/engineerVidal.jpg";
import DesignerPicture from "../../../public/images/about/designerVidal.jpg";
//styles
import styles from "./TeamSection.module.css";

//create all team members in the array below
const teamMembers = [
  {
    key: 1,
    name: "Chris",
    title: "President",
    image: PresidentPicture,
    description:
      "Chris founded Vidal with the intention of building beautiful websites that demonstrate the beauty behind simplicity",
  },
  {
    key: 2,
    name: "克里斯",
    title: "Engineer",
    image: EngineerPicture,
    description:
      "Chris is a computer science student that enjoys waking up early, listening to music and drinking coffee while building out his imagination with code",
  },
  {
    key: 3,
    name: "كريس",
    title: "Designer",
    image: DesignerPicture,
    description:
      "Chris enjoys designing simple, yet beautiful layouts. Often including fibonacci ratios to appeal to the subconscious perspective",
  },
];

const TeamSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Meet The Team</h2>
      <div className={styles.teamCardSectionContainer}>
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
    </div>
  );
};

export default TeamSection;
