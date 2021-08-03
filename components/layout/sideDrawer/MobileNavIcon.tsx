//library imports
import { FC } from "react";
import { useState } from "react";

//styles
import styles from "./MobileNavIcon.module.css";

const MobileNavIcon: FC = (props) => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const mobileMenuStatusHandler = () => {
    if (mobileMenuStatus) {
      setMobileMenuStatus(false);
    } else {
      setMobileMenuStatus(true);
    }
  };
  return (
    <div className={styles.menu} onClick={mobileMenuStatusHandler}>
      <div className={styles.menuSlash}></div>
      <div
        className={`${
          !mobileMenuStatus ? styles.menuSlash : styles.menuSlashActive_middle
        }`}
      ></div>
      <div className={styles.menuSlash}></div>
    </div>
  );
};

export default MobileNavIcon;
