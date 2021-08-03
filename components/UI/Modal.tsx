//styles
import styles from "./Modal.module.css";

type ModalTypes = {
  children?: React.ReactNode;
};

const Modal = (children: ModalTypes) => {
  return <div className={styles.modal}>{children}</div>;
};

export default Modal;
