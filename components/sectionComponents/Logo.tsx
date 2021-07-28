//styles
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div>&#60;</div>
      <div>\</div>
      <div>/</div>
      <div>&#62;</div>
    </div>
  );
};

export default Logo;
