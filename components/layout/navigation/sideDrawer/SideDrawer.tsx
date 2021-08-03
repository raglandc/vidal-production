//local
import Link from "next/link";

import styles from "./SideDrawer.module.css";

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
  return (
    <li className={styles.listItem}>
      <Link href={props.link}>
        <a>{props.linkTitle}</a>
      </Link>
    </li>
  );
};

const SideDrawer = () => {
  return (
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
  );
};
export default SideDrawer;
