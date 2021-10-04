//local
import StatsCard from "./homepageComponents/StatsCard";

//local svg imports
import StatOneSvg from "../../../public/images/home/statOneSvg.svg";
import StatTwoSvg from "../../../public/images/home/statTwoSvg.svg";
import StatThreeSvg from "../../../public/images/home/statThreeSvg.svg";

//styles
import styles from "./StatsSection.module.css";

const stats = [
  {
    id: "stat-1",
    description:
      "Nearly 90% of people use the Internet to find local businesses.",
    source: "Nielsen.com",
    svgSource: StatOneSvg,
    svgTitle: "business woman cartoon.",
  },
  {
    id: "stat-2",
    description:
      "38% of people will stop engaging with a site if it has an unappealing design.",
    source: "Sweor.com",
    svgSource: StatTwoSvg,
    svgTitle: "phone screen with big x, demonstrating bad design.",
  },
  {
    id: "stat-3",
    description: "Only 50% of small businesses have a website.",
    source: "SmartCompany.com",
    svgSource: StatThreeSvg,
    svgTitle: "creating a website for small business",
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
              svgSource={stat.svgSource}
              svgTitle={stat.svgTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
