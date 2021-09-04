//library import

//componenets
import BlogListItem from "../../components/UI/BlogListItem";
import FounderPicture from "../../public/gonz.jpg";

//style import
import styles from "./blogIndex.module.css";

//fake data

export const blogData = [
  {
    key: "my-first-blog",
    title: "My First Blog",
    author: "Chris Ragland",
    date: "sep. 4th 2021",
    description: "an awesome quick read about my first blog!",
    readTime: "5 min read",
    image: FounderPicture,
  },
];

const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogHeader}>Blog Posts</h1>
      <ul className={styles.blogListContainer}>
        {/* isLoading ? isLoadingIcon : display list of blogs from database */}
        {blogData.map((blog) => {
          return (
            <BlogListItem
              key={blog.key}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              description={blog.description}
              image={blog.image}
              readTime={blog.readTime}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
