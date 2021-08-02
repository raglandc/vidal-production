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
        <h1
          ref={ref}
          className={isVisible ? styles.title : styles.titleSoftware}
        >
          Software
        </h1>
      </div>
      <div ref={ref} className={isVisible ? styles.p : styles.pStart}>
        <p className={styles.p__text}>
          A powerful online presence is important.
        </p>
        <p className={styles.p__text}>These days, its vital.</p>
        <p className={styles.p__text}>Meet Vidal.</p>
      </div>
      <Button />
    </div>
  );
};

export default BannerSection;
