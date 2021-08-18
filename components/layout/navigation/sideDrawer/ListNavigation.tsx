//library imports
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <Link href={"https://www.linkedin.com/in/chris-ragland-42461a1b4/"}>
        <a target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </a>
      </Link>
      <Link href={"https://github.com/raglandc"}>
        <a target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
      </Link>
    </ul>
  );
};

export default ListNavigation;
