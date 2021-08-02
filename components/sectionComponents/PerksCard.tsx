//libaray imports
import { useRef } from "react";
import Image from "next/image";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
//styles
import styles from "./PerksCard.module.css";

type PerksCardProps = {
  key: string;
  svgLink: StaticImageData;
  description: string;
  title: string;
};

const PerksCard = (props: PerksCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref} className={isVisible ? styles.card : styles.start}>
      <div className={styles.svgClass}>
        <Image src={props.svgLink} alt="svg image" />
      </div>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default PerksCard;
