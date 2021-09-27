//library import
import Head from "next/head";
import { GetStaticProps } from "next";

//local imports
import BlogListItem from "../../components/UI/BlogListItem";
import { getAllPosts } from "../../lib/posts-util";

//style import
import styles from "./BlogIndex.module.css";

const BlogPage = ({
  allPosts,
}: {
  allPosts: {
    key: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    excerpt: string;
  }[];
}) => {
  return (
    <>
      <Head>
        <title>Vidal - Blog Posts</title>
        <meta
          name="description"
          content="Read articles written by the Vidal development team. Articles tend to cover topics about technology and web development."
        />
      </Head>
      <div className={styles.blogContainer}>
        <h1 className={styles.blogHeader}>Blog Posts</h1>
        <ul className={styles.blogListContainer}>
          {/* isLoading ? isLoadingIcon : display list of blogs from database */}
          {allPosts.map((post: any) => {
            return (
              <BlogListItem
                key={post.title}
                slug={post.slug}
                title={post.title}
                author={post.author}
                date={post.date}
                excerpt={post.excerpt}
                readTime={post.readTime}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

//next js built in static data fetching
export const getStaticProps: GetStaticProps = async (context) => {
  //fetch data from an api

  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 3600,
  };
};

export default BlogPage;
