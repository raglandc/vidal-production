//components

import { useState, useEffect } from "react";
import Logo from "../sections/sectionComponents/Logo";
import MobileNavIcon from "../sections/sectionComponents/MobileNavIcon";
import ListNavigation from "../sections/sectionComponents/ListNavigation";

//styles
import styles from "./MainNavigation.module.css";

const mediaQuery = "screen and (min-width: 1000px)";

////// component /////////
const MainNavigation = () => {
  //responsive navbar
  const mql = window.matchMedia(mediaQuery);
  const [isDesktop, setIsDesktop] = useState(mql.matches);

  useEffect(() => {
    const mediaChangeHandler = function (this: MediaQueryList) {
      setIsDesktop(this.matches);
    };

    mql.addEventListener("change", mediaChangeHandler);
    setIsDesktop(mql.matches);

    return () => {
      mql.removeEventListener("change", mediaChangeHandler);
    };
  }, [mql]);

  return (
    <nav className={styles.navigation}>
      <Logo />
      {isDesktop ? <ListNavigation /> : <MobileNavIcon />}
    </nav>
  );
};

export default MainNavigation;
