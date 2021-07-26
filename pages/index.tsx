///components////

///styles////
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}> Vidal </h1>
        <h1 className={styles.title}> Software </h1>

        <p className={styles.p}>
          Welcome to a new generation of design and development.
        </p>
      </div>
    </>
  );
};

export default HomePage;
