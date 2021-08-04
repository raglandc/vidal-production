//state management
import { useAppSelector } from "../../../../app/hooks";
import { selectStatus } from "../../../../app/features/menuStatusSlice";

//local
import Link from "next/link";

import styles from "./SideDrawer.module.css";
import { useRouter } from "next/dist/client/router";

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

type ListItemProps = {
  key: string;
  link: string;
  linkTitle: string;
};

const ListItem = (props: ListItemProps) => {
  const { asPath } = useRouter();

  return (
    <li className={asPath === props.link ? styles.active : styles.listItem}>
      <Link href={props.link}>
        <a>{props.linkTitle}</a>
      </Link>
    </li>
  );
};

const SideDrawer = () => {
  const status = useAppSelector(selectStatus);

  return (
    <div className={status ? styles.sideDrawer : styles.start}>
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
  );
};
export default SideDrawer;
