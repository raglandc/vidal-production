//local imports
import TeamCard from "./AboutPageComponents/TeamCard";
//images imported before component loads
import FounderPicture from "../../../public/images/posts/getting-started-writing-blogs/getting-started-writing-blogs.jpg";
//styles
import styles from "./TeamSection.module.css";
import AboutVideoSection from "./AboutVideoSection";

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
  {
    key: 2,
    name: "克里斯",
    title: "Engineer",
    image: FounderPicture,
    description:
      "Chris founded Vidal with the intention of building beautiful websites that demonstrate the beauty behind simplicity",
  },
  {
    key: 3,
    name: "كريس",
    title: "Designer",
    image: FounderPicture,
    description:
      "Chris founded Vidal with the intention of building beautiful websites that demonstrate the beauty behind simplicity",
  },
];

const TeamSection = () => {
  return (
    <>
      <h2 className={styles.header}>Meet The Team</h2>
      <AboutVideoSection />
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
    </>
  );
};

export default TeamSection;
