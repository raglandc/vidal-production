//library

//components
import { useState } from "react";
import Logo from "../sections/sectionComponents/Logo";
import MobileNavIcon from "../sections/sectionComponents/MobileNavIcon";
import ListNavigation from "../sections/sectionComponents/ListNavigation";

//styles
import styles from "./MainNavigation.module.css";

////// component /////////
const MainNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ListNavigation />
      <MobileNavIcon />
    </nav>
  );
};

export default MainNavigation;
