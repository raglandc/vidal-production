//library imports
import { FC } from "react";
import Modal from "../../../UI/Modal";
import SideDrawer from "./SideDrawer";

//state managment imports
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  setMenuStatus,
  selectStatus,
} from "../../../../app/features/menuStatusSlice";

//styles
import styles from "./MobileNavIcon.module.css";

const MobileNavIcon: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  return (
    <>
      {status ? (
        <Modal selector="modal">
          <SideDrawer />
        </Modal>
      ) : null}
      <div className={styles.menu} onClick={() => dispatch(setMenuStatus())}>
        <div className={styles.menuSlash}></div>
        <div
          className={`${
            !status ? styles.menuSlash : styles.menuSlashActive_middle
          }`}
        ></div>
        <div className={styles.menuSlash}></div>
      </div>
    </>
  );
};

export default MobileNavIcon;
