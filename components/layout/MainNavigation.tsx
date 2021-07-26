//styles
import styles from "./MainNavigation.module.css";

////// component /////////
const NavigationBar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.menu}>
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
