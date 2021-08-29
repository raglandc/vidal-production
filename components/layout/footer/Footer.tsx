//library
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
//styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icon}>
        <Link href={"https://www.linkedin.com/in/chris-ragland-42461a1b4/"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${styles.iconButton} ${styles.icon} `}
            />
          </a>
        </Link>
        <Link href={"https://github.com/raglandc"}>
          <a target="_blank">
            <FontAwesomeIcon
              className={`${styles.iconButton} ${styles.icon} `}
              icon={faGithub}
            />
          </a>
        </Link>
      </div>
      <p className={styles.copy}>&copy; 2021 Vidal </p>
    </footer>
  );
};

export default Footer;
