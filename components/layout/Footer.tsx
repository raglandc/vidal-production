//styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.copy}>&copy; 2021 Vidal Software</p>
    </footer>
  );
};

export default Footer;
