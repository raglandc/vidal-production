//library
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

//local imports
import { getAllPosts, getPost } from "../../lib/posts-util";

//styles
import styles from "./BlogPost.module.css";

const BlogPost = ({
  post,
}: {
  post: {
    key: string;
    slug: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
  };
}) => {
  return (
    <div className={styles.blogContainer}>
      <div>
        <h2>{post.title}</h2>
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <Link href="/blog">
        <a className={styles.backToOtherBlogs}>back to other articles</a>
      </Link>
    </div>
  );
};

//dynamically rendering paths with next js
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          blogId: post.slug,
        },
      },
    ],
  };
};

//dynamically fetch data and return data as props from server
//next js built in static data fetching
export const getStaticProps: GetStaticProps = async (context) => {
  //fetch data from an api

  const allPosts = getAllPosts();

  const post = getPost();

  return {
    props: {
      allPosts: post,
    },
    revalidate: 3600,
  };
};

export default BlogPost;
