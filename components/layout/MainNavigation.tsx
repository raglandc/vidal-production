//components
import Logo from "../sectionComponents/Logo";
import MobileNavIcon from "../sectionComponents/MobileNavIcon";

//styles
import styles from "./MainNavigation.module.css";

////// component /////////
const NavigationBar = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <MobileNavIcon />
    </nav>
  );
};

export default NavigationBar;
