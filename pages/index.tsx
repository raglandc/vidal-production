///components////
import Button from "../components/UI/Button";

///styles////
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}> Vidal </h1>
          <h1 className={styles.title}> Software </h1>
        </div>
        <div className={styles.p}>
          <p className={styles.p__text}>
            A powerful online presence is important.
          </p>
          <p className={styles.p__text}>Meet Vidal.</p>
        </div>
        <Button />
      </div>
    </>
  );
};

export default HomePage;
