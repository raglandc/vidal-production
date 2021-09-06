//library import
import { useState, useEffect } from "react";

//componenets
import BlogListItem from "../../components/UI/BlogListItem";
import FounderPicture from "../../public/gonz.jpg";

//style import
import styles from "./BlogIndex.module.css";

type BlogData = [
  {
    key: string;
    title: string;
    author: string;
    description: string;
    date: string;
    readTime: string;
    //string for now
    image: StaticImageData;
  }
];

//fake data

export const blogData = [
  {
    key: 1,
    url: "my_first_blog",
    title: "My First Blog",
    author: "Chris Ragland",
    date: "sep. 4th 2021",
    description: "an awesome quick read about my first blog!",
    readTime: "5 min read",
    image: FounderPicture,
  },
];

const BlogPage = () => {
  //use Effect to make Http request

  const [loadedBlogs, setLoadedBlogs] = useState<any>([]);

  useEffect(() => {
    //send http request to database

    //set LoadedBlogs
    setLoadedBlogs(blogData);
  }, []);
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogHeader}>Blog Posts</h1>
      <ul className={styles.blogListContainer}>
        {/* isLoading ? isLoadingIcon : display list of blogs from database */}
        {loadedBlogs.map((blog: any) => {
          return (
            <BlogListItem
              key={blog.key}
              url={blog.url}
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
