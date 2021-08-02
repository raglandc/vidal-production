//local imports
import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
//styles //
import styles from "./Button.module.css";

const Button = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <button ref={ref} className={isVisible ? styles.button : styles.start}>
      Learn More
    </button>
  );
};

export default Button;
