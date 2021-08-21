//library imports
import Link from "next/link";
import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
//styles //
import styles from "./Button.module.css";

type ButtonType = {
  link: string;
  title: string;
  style: string;
};

const Button = (props: ButtonType) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const buttonStyle = props.style === "solid" ? styles.solid : styles.hollow;

  return (
    <button ref={ref} className={`${isVisible ? buttonStyle : styles.start}`}>
      <Link href={props.link}>
        <a>{props.title}</a>
      </Link>
    </button>
  );
};

export default Button;
