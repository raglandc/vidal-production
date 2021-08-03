import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//styles
import styles from "./Modal.module.css";

type ModalType = {
  children?: React.ReactNode;
  selector: string;
};

const Modal = ({ children, selector }: ModalType) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? ReactDOM.createPortal(
        <div className={styles.modal}>{children}</div>,
        document.getElementById(selector)!
      )
    : null;
};

export default Modal;
