//styles
import { useState } from "react";
import styles from "./MainNavigation.module.css";

////// component /////////
const NavigationBar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuStatusHandler = () => {
    if (menuStatus) {
      setMenuStatus(false);
    } else {
      setMenuStatus(true);
    }
  };

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>logo</div>
        <div className={styles.menu} onClick={menuStatusHandler}>
          <div className={styles.menuSlash}></div>
          <div
            className={`${
              !menuStatus ? styles.menuSlash : styles.menuSlashActive_middle
            }`}
          ></div>
          <div className={styles.menuSlash}></div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
