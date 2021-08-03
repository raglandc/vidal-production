import { FC } from "react";
import MainNavigation from "./navigation/MainNavigation";
import Footer from "./footer/Footer";

///styles///
import styles from "./Layout.module.css";
import Modal from "../UI/Modal";

const Layout: FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
