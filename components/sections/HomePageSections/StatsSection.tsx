//local
import StatsCard from "./homepageComponents/StatsCard";

//styles
import styles from "./StatsSection.module.css";

const stats = [
  {
    id: "stat-1",
    description:
      "Nearly 90% of people use the Internet to find local businesses.",
    source: "Nielsen.com",
  },
  {
    id: "stat-2",
    description:
      "38% of people will stop engaging with a site if it has an unappealing design.",
    source: "Sweor.com",
  },
  {
    id: "stat-3",
    description: "Only 50% of small businesses have a website.",
    source: "SmartCompany.com",
  },
];

const StatsSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.statsHeader}>Stats.</h2>
      <div className={styles.listContainer}>
        {stats.map((stat) => {
          return (
            <StatsCard
              key={stat.id}
              description={stat.description}
              source={stat.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
