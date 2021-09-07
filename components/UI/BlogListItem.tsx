//library
import Link from "next/link";
import Image from "next/image";

//styles
import styles from "./BlogListItem.module.css";

type BlogListItemProps = {
  key: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

const BlogListItem = (props: BlogListItemProps) => {
  //need to create a link that will take current url and add id of specific blog

  return (
    <Link
      href={{ pathname: "blog/[blogId]", query: { blogId: `${props.slug}` } }}
      passHref
    >
      <li className={styles.blogCard}>
        <div className={styles.contentsOfCard}>
          <h4 className={styles.blogCardTitle}>{props.title}</h4>
          <span className={styles.author}>{props.author}</span>
          <p className={styles.description}>{props.excerpt}</p>
          <span className={styles.span}>{props.date}</span>
          <span className={styles.span}>|</span>
          <span className={styles.span}>{props.readTime} read</span>
        </div>
      </li>
    </Link>
  );
};

export default BlogListItem;
