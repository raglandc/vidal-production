//library imports
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
//local imports
import LogoSvg from "../../../public/vidal.svg";
import SigSvg from "../../../public/aboutSig.svg";
//styles
import styles from "./AboutIntroSection.module.css";

const AboutIntro = () => {
  const springStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1618 },
  });
  return (
    <animated.div style={springStyle} className={styles.pageContainer}>
      <h2 className={styles.pageHeader}>About</h2>
      <div className={styles.introContainer}>
        <div className={styles.logoContainer}>
          <Image src={LogoSvg} alt="Vidal Logo" />
        </div>
        <div className={styles.container}>
          <p className={styles.p}>
            &ldquo;Vidal&apos;s promise is to deliver high quality websites that
            scream modern and professional. Vidal adheres to the KISS method
            while designing: Keep It Simple Stupid.&rdquo;
          </p>
          <div className={styles.sig}>
            <Image src={SigSvg} alt="president sig for design" />
            <div className={styles.president}>President</div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default AboutIntro;
