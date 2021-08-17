//library imports
import Image from "next/image";

//state management
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectStatus,
  setMenuStatus,
} from "../../../app/features/menuStatusSlice";

//local imports
import LogoSvg from "../../../public/vidal.svg";

//styles
import styles from "./Logo.module.css";

const Logo = () => {
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    if (status) {
      dispatch(setMenuStatus());
    }
  };

  return (
    <div onClick={closeMenuHandler} className={styles.logo_container}>
      <Image src={LogoSvg} alt="Vidal Logo" />
    </div>
  );
};

export default Logo;
