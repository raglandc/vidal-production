//library
import Image from "next/image";
//local
import LogoSvg from "../../../public/vidalWhite.svg";

//styles
import styles from "./threeDSection.module.css";
const ThreeDSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3 className={styles.headers}>3D</h3>
        <h3 className={styles.headers}>Dream</h3>
        <h3 className={styles.headers}>Design</h3>
        <h3 className={styles.headers}>Develope</h3>
      </div>
      <div className={styles.logo}>
        <Image src={LogoSvg} alt="logo" width="200.85px" height="325px" />
      </div>
    </div>
  );
};

export default ThreeDSection;
