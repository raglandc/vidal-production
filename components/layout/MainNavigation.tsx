//components
import Logo from "../sections/sectionComponents/Logo";
import MobileNavIcon from "../sections/sectionComponents/MobileNavIcon";

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
