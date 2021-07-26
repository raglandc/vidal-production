//styles
import styles from "./MainNavigation.module.css";

////// component /////////
const NavigationBar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>logo</div>
        <div className={styles.menu}>
          <div className={styles.menuSlash}></div>
          <div className={styles.menuSlash}></div>
          <div className={styles.menuSlash}></div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
