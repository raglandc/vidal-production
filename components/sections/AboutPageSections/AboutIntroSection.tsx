//library imports
import Image from "next/image";
//local imports
import LogoSvg from "../../../public/vidal.svg";
import SigSvg from "../../../public/aboutSig.svg";
//styles
import styles from "./AboutIntroSection.module.css";

const AboutIntro = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageHeader}>About</h2>
      <div className={styles.introContainer}>
        <div className={styles.logoContainer}>
          <Image src={LogoSvg} alt="Vidal Logo" />
        </div>
        <div className={styles.container}>
          <p className={styles.p}>
            &ldquo;Vidal&apos;s promise is to deliver high quality websites that
            scream modern and professional. Vidal adhears to the KISS method
            while designing: Keep It Simple Stupid.&rdquo;
          </p>
          <div className={styles.sig}>
            <Image src={SigSvg} alt="president sig for design" />
            <div className={styles.president}>Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
