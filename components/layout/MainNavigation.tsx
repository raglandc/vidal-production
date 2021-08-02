//components

import { useState } from "react";
import Logo from "../sections/sectionComponents/Logo";
import MobileNavIcon from "../sections/sectionComponents/MobileNavIcon";
import ListNavigation from "../sections/sectionComponents/ListNavigation";

//styles
import styles from "./MainNavigation.module.css";

////// component /////////
const MainNavigation = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <nav className={styles.navigation}>
      <Logo />
      {!isMobile ? <MobileNavIcon /> : <ListNavigation />}
    </nav>
  );
};

export default MainNavigation;
