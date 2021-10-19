//library
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

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
};

const BlogListItem = (props: BlogListItemProps) => {
  const divStyle = useSpring({
    from: { transform: "translateY(314px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 314 },
  });

  return (
    <animated.div style={divStyle}>
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
    </animated.div>
  );
};

export default BlogListItem;
