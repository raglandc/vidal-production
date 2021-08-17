//library imports
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

//state management
import { useAppDispatch } from "../../../../app/hooks";
import { setMenuStatus } from "../../../../app/features/menuStatusSlice";

//styles
import styles from "./ListItem.module.css";

//// menu item building block component
type ListItemProps = {
  key: string;
  link: string;
  linkTitle: string;
};

const ListItem = (props: ListItemProps) => {
  const dispatch = useAppDispatch();
  const { asPath } = useRouter();

  return (
    <li
      className={asPath === props.link ? styles.active : styles.listItem}
      onClick={() => dispatch(setMenuStatus())}
    >
      <Link href={props.link}>
        <a>{props.linkTitle}</a>
      </Link>
    </li>
  );
};

export default ListItem;
