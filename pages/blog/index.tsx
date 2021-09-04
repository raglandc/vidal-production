//library import

//style import
import styles from "./blogIndex.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogHeader}>Blog Posts</h1>
      <div className={styles.blogListContainer}>
        {/* isLoading ? isLoadingIcon : display list of blogs from database */}
      </div>
    </div>
  );
};

export default BlogPage;
