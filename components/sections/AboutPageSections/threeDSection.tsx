//library
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
//local
import LogoSvg from "../../../public/vidalWhite.svg";

//styles
import styles from "./threeDSection.module.css";
const ThreeDSection = () => {
  const dreamSpring = useSpring({
    delay: 3000,
    loop: { reverse: true },
    from: { color: "#FFF" },
    to: { color: "#DB2777" },
    config: { duration: 500 },
  });

  const designSpring = useSpring({
    delay: 3000,
    loop: { reverse: true },
    from: { color: "#fff" },
    to: { color: "#2563EB" },
    config: { duration: 550 },
  });
  const developeSpring = useSpring({
    delay: 3000,
    loop: { reverse: true },
    from: { color: "#fff" },
    to: { color: "#FBBF24" },
    config: { duration: 618 },
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3 className={styles.headers}>3D</h3>
        <animated.h3 style={dreamSpring} className={styles.headers}>
          Dream
        </animated.h3>
        <animated.h3 style={designSpring} className={styles.headers}>
          Design
        </animated.h3>
        <animated.h3 style={developeSpring} className={styles.headers}>
          Develope
        </animated.h3>
      </div>
      <div className={styles.logo}>
        <Image src={LogoSvg} alt="logo" width="200.85px" height="325px" />
      </div>
    </div>
  );
};

export default ThreeDSection;
