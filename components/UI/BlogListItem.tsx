//library
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//styles

import styles from "./BlogListItem.module.css";

type BlogListItemProps = {
  key: string;
  title: string;
  author: string;
  description: string;
  date: string;
  readTime: string;
  //string for now
  image: StaticImageData;
};

const BlogListItem = (props: BlogListItemProps) => {
  //need to create a link that will take current url and add id of specific blog

  return (
    <Link href={"blog/" + props.key} passHref>
      <li className={styles.blogCard}>
        <div className={styles.leftSideOfCard}>
          <h4 className={styles.blogCardTitle}>{props.title}</h4>
          <span className={styles.span}>{props.author}</span>
          <p className={styles.description}>{props.description}</p>
          <span className={styles.span}>{props.date}</span>
          <span className={styles.span}>{props.readTime}</span>
        </div>
        <div className={styles.rightSideOfCard}>
          <Image src={props.image} alt="blog card image" objectFit="fill" />
        </div>
      </li>
    </Link>
  );
};

export default BlogListItem;
