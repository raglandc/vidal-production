//library imports
import { useState } from "react";

//styles
import styles from "./MobileNavIcon.module.css";

const MobileNavIcon = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuStatusHandler = () => {
    if (menuStatus) {
      setMenuStatus(false);
    } else {
      setMenuStatus(true);
    }
  };

  return (
    <div className={styles.menu} onClick={menuStatusHandler}>
      <div className={styles.menuSlash}></div>
      <div
        className={`${
          !menuStatus ? styles.menuSlash : styles.menuSlashActive_middle
        }`}
      ></div>
      <div className={styles.menuSlash}></div>
    </div>
  );
};

export default MobileNavIcon;
