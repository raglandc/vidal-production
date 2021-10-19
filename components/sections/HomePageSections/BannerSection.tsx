//library imports
import { useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import Image from "next/image";

//local
import BannerSvg from "../../../public/images/home/bannerSVG.svg";
import Button from "../../UI/Button";
//styles

import styles from "./BannerSection.module.css";

const BannerSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={styles.container}>
      <div className={styles.divider}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Vidal</h1>
        </div>
        <div className={styles.subHeading}>
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
      <div className={styles.svg}>
        <Image
          src={BannerSvg}
          alt="personal website cartoon"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default BannerSection;
