//state management imports
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  setMenuStatus,
  selectStatus,
} from "../../../../app/features/menuStatusSlice";

//component imports
import SideDrawer from "./SideDrawer";

//styles
import styles from "./MobileNavIcon.module.css";

///////////////////////////
/////Main Component////////
///////////////////////////

const MobileNavIcon = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  return (
    <>
      <SideDrawer />
      <div className={styles.menu} onClick={() => dispatch(setMenuStatus())}>
        <div className={styles.menuSlash}></div>
        <div
          className={!status ? styles.menuSlash : styles.menuSlashActive_middle}
        ></div>
        <div className={styles.menuSlash}></div>
      </div>
    </>
  );
};

export default MobileNavIcon;
