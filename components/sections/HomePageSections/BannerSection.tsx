//library imports
import { useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

//components
import Button from "../../UI/Button";
//styles

import styles from "./BannerSection.module.css";

const BannerSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 ref={ref} className={isVisible ? styles.title : styles.titleVidal}>
          Vidal
        </h1>
      </div>
      <div
        ref={ref}
        className={isVisible ? styles.subHeading : styles.subHeadingStart}
      >
        <p className={styles.subHeading__text}>
          A powerful online presence is important.
        </p>
        <p className={styles.subHeading__text}>These days, its vital.</p>
        <p className={styles.subHeading__text}>Meet Vidal.</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button link="/about" title="Learn More" style="hollow" />
        <Button link="/contact" title="Contact" style="solid" />
      </div>
    </div>
  );
};

export default BannerSection;
