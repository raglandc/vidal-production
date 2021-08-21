//library imports
import Image from "next/image";
//local imports
import LogoSvg from "../../../public/vidal.svg";
import SigSvg from "../../../public/aboutSig.svg";
//styles
import styles from "./AboutIntro.module.css";

const AboutIntro = () => {
  return (
    <>
      <h2 className={styles.pageHeader}>About</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.logoContainer}>
          <Image src={LogoSvg} alt="Vidal Logo" />
        </div>
        <div className={styles.container}>
          <p className={styles.p}>
            Vidal&apos;s promise is to deliver high quality websites that scream
            modern and professional. Vidal adhears to the KISS method of design.
            Keep It Simple Stupid.
          </p>
          <div className={styles.sig}>
            <Image src={SigSvg} alt="president signiture for design purpose" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
