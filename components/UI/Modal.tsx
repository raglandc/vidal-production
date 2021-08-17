//library imports
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//state management
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectStatus,
  setMenuStatus,
} from "../../app/features/menuStatusSlice";

//styles
import styles from "./Modal.module.css";

//////////////////////////////
////////Main component///////
////////////////////////////

type ModalType = {
  children?: React.ReactNode;
  selector: string;
};

const Modal = ({ children, selector }: ModalType) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, [selector]);

  //will not be able to unmount with animations, yet to find a way
  //due to conditional render
  return mounted
    ? ReactDOM.createPortal(
        <div
          onClick={() => dispatch(setMenuStatus())}
          className={status ? styles.modal : styles.hidden}
        >
          {children}
        </div>,
        document.getElementById(selector)!
      )
    : null;
};

export default Modal;
