//local imports
import Link from "next/link";
//styles
import styles from "./ListNavigation.module.css";

const ListNavigation = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default ListNavigation;
