//library import

import { GetStaticProps } from "next";

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

const BlogPage = (props: any) => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogHeader}>Blog Posts</h1>
      <ul className={styles.blogListContainer}>
        {/* isLoading ? isLoadingIcon : display list of blogs from database */}
        {props.blogs.map((blog: any) => {
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

//next js built in static data fetching
export const getStaticProps: GetStaticProps = async () => {
  //fetch data from an api
  return {
    props: {
      blogs: blogData,
    },
  };
};

export default BlogPage;
