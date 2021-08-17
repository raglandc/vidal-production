//state management
import { useAppSelector } from "../../app/hooks";
import { selectStatus } from "../../app/features/menuStatusSlice";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//styles
import styles from "./Modal.module.css";

type ModalType = {
  children?: React.ReactNode;
  selector: string;
};

const Modal = ({ children, selector }: ModalType) => {
  const status = useAppSelector(selectStatus);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? ReactDOM.createPortal(
        <div className={status ? styles.modal : styles.hidden}>{children}</div>,
        document.getElementById(selector)!
      )
    : null;
};

export default Modal;
