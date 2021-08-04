//local imports
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
//styles
import styles from "./ListNavigation.module.css";

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

const ListNavigation = () => {
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

  return (
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
  );
};

export default ListNavigation;
