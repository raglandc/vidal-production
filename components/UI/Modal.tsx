import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//styles
import styles from "./Modal.module.css";

type ModalType = {
  children?: React.ReactNode;
  selector: string;
  open: boolean;
};

const Modal = ({ children, selector, open }: ModalType) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? ReactDOM.createPortal(
        <div className={open ? styles.modal : styles.hidden}>{children}</div>,
        document.getElementById(selector)!
      )
    : null;
};

export default Modal;
