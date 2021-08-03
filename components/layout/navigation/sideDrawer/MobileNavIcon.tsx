//library imports
import { FC } from "react";
import { useState } from "react";
import Modal from "../../../UI/Modal";
import SideDrawer from "./SideDrawer";

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
    <>
      {mobileMenuStatus ? (
        <Modal selector="modal">
          <SideDrawer />
        </Modal>
      ) : null}
      <div className={styles.menu} onClick={mobileMenuStatusHandler}>
        <div className={styles.menuSlash}></div>
        <div
          className={`${
            !mobileMenuStatus ? styles.menuSlash : styles.menuSlashActive_middle
          }`}
        ></div>
        <div className={styles.menuSlash}></div>
      </div>
    </>
  );
};

export default MobileNavIcon;
