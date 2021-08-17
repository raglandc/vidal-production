//library imports
import { CSSTransition } from "react-transition-group";

//state management
import { useAppSelector } from "../../../../app/hooks";
import { selectStatus } from "../../../../app/features/menuStatusSlice";

//component imports
import Modal from "../../../UI/Modal";
import ListItem from "./ListItem";

//styles
import styles from "./SideDrawer.module.css";

//links with routes and titles
const linkList = [
  {
    link: "/",
    linkTitle: "Home",
  },
  {
    link: "/about",
    linkTitle: "About",
  },
  {
    link: "/blog",
    linkTitle: "Blog",
  },
  {
    link: "/contact",
    linkTitle: "Contact",
  },
];

//////////////////////////////
////////Main component///////
/////////////////////////////

const SideDrawer = () => {
  const status = useAppSelector(selectStatus);

  return (
    <Modal selector="modal">
      <CSSTransition
        in={status}
        timeout={162}
        classNames={{
          enterActive: styles.sideDrawerEnterActive,
          enterDone: styles.sideDrawerEnterDone,
          exitActive: styles.sideDrawerExitActive,
          exitDone: styles.sideDrawerExitDone,
        }}
      >
        <div className={styles.sideDrawer}>
          <ul className={styles.list}>
            {linkList.map((link) => {
              return (
                <ListItem
                  key={link.link}
                  link={link.link}
                  linkTitle={link.linkTitle}
                />
              );
            })}
          </ul>
        </div>
      </CSSTransition>
    </Modal>
  );
};
export default SideDrawer;
