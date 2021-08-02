//local imports
import LogoSvg from "../../../public/vidal.svg";
import Image from "next/image";
//styles
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <Image src={LogoSvg} alt="Vidal Logo" />
    </div>
  );
};

export default Logo;
