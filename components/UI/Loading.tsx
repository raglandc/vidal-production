//library imports
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

//local imports
import Logo from "../../public/vidal.svg";

//styles
import styles from "./Loading.module.css";

const Loading = () => {
  const loadingStyle = useSpring({
    config: { duration: 300 },
    from: { color: "#111" },
    to: { color: "blue" },
    delay: 300,
    loop: { reverse: true },
  });

  return (
    <animated.div style={loadingStyle} className={styles.loadingContainer}>
      <Image src={Logo} alt="Vidal Logo" />
    </animated.div>
  );
};

export default Loading;
