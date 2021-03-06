//library
import Link from "next/link";

//local
import Logo from "../../UI/Logo";
import MobileNavIcon from "./sideDrawer/MobileNavIcon";
import ListNavigation from "./sideDrawer/ListNavigation";

//styles
import styles from "./MainNavigation.module.css";

////// component /////////
const MainNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ListNavigation />
      <MobileNavIcon />
    </nav>
  );
};

export default MainNavigation;
