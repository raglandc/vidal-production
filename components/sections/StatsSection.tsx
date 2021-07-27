import SectionWrapper from "../UI/SectionWrapper";
import StatsCard from "../UI/StatsCard";

//styles
import styles from "./StatsSection.module.css";

const stats = [
  {
    id: "stat-1",
    description: "This is a test of the stats",
    source: "Me bitches",
  },
  {
    id: "stat-2",
    description: "This is another one of the freat stats",
    source: "alos me bitch",
  },
];

const StatsSection = () => {
  return (
    <SectionWrapper>
      <h2 className={styles.statsHeader}>Stats</h2>
      {stats.map((stat) => {
        return (
          <StatsCard
            key={stat.id}
            description={stat.description}
            source={stat.source}
          />
        );
      })}
    </SectionWrapper>
  );
};

export default StatsSection;
