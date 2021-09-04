//styles

import styles from "./BlogListItem.module.css";

type BlogListItemProps = {
  title: String;
  author: String;
  date: Date;
  readTime: String;
  image: StaticImageData;
};

const BlogListItem = () => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.leftSideOfCard}>
        <h4 className={styles.blogCardTitle}>Title</h4>
        <span>Author</span>
        <p className={styles.description}>This is an example description</p>
        <span>9/4/2021</span>
        <span>5 min read</span>
      </div>
      <div className={styles.rightSideOfCard}>
        <div>Image Here</div>
      </div>
    </div>
  );
};

export default BlogListItem;
