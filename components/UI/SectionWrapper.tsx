//styles
import styles from "./SectionWrapper.module.css";

type SectionWrapperProps = {
  children?: React.ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <div className={styles.sectionWrapper}>{children}</div>;
};

export default SectionWrapper;
