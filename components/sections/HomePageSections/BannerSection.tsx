import Button from "../../UI/Button";
import SectionWrapper from "../../UI/SectionWrapper";
//styles
import styles from "./BannerSection.module.css";

const BannerSection = () => {
  return (
    <SectionWrapper>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}> Vidal </h1>
        <h1 className={styles.title}> Software </h1>
      </div>
      <div className={styles.p}>
        <p className={styles.p__text}>
          A powerful online presence is important.
        </p>
        <p className={styles.p__text}>These days, its vital.</p>
        <p className={styles.p__text}>Meet Vidal.</p>
      </div>
      <Button />
    </SectionWrapper>
  );
};

export default BannerSection;
