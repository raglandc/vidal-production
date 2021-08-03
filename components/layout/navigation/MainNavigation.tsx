//library

//components
import { useState } from "react";
import Logo from "../../sections/sectionComponents/Logo";
import MobileNavIcon from "./sideDrawer/MobileNavIcon";
import ListNavigation from "./sideDrawer/ListNavigation";

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
