import MainNavigation from "./navigation/MainNavigation";
import Footer from "./footer/Footer";

///styles///
import styles from "./Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
