import MainNavigation from "./MainNavigation";

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
    </div>
  );
}

export default Layout;
