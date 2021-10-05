//library import
import Head from "next/head";
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";

//local imports
import BlogListItem from "../../components/UI/BlogListItem";
import { getAllPosts } from "../../lib/posts-util";

//style import
import styles from "./BlogIndex.module.css";

const BlogPage = ({
  allPosts,
}: {
  allPosts: {
    key: number;
    title: string;
    author: string;
    date: string;
    readTime: string;
    excerpt: string;
  }[];
}) => {
  const [postsArray, setPostsArray] = useState([...allPosts]);
  const [filterState, setFilterState] = useState("newest");

  const filterBlogsHandler = () => {
    //set postsArray return the array and fill postsArray

    console.log(filterState);

    if (filterState === "newest") {
      setPostsArray([
        ...postsArray.sort((postA: any, postB: any) => {
          return postA.date > postB.date ? -1 : 1;
        }),
      ]);
    }

    if (filterState === "oldest") {
      setPostsArray([
        ...postsArray.sort((postA: any, postB: any) => {
          return postA.date < postB.date ? -1 : 1;
        }),
      ]);
    }
  };

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
        <div className={styles.blogHeaderContainer}>
          <h1 className={styles.blogHeader}>Blog Posts</h1>
          <p className={styles.blogHeaderText}>Tech | Math | Lifestyle</p>
        </div>
        <ul className={styles.blogListContainer}>
          <div className={styles.blogFilter}>
            <label htmlFor="filter">Filter</label>
            <select
              onChange={(e) => {
                setFilterState(e.target.value);
                filterBlogsHandler();
              }}
              name="filter"
              id="filter"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          {/* isLoading ? isLoadingIcon : display list of blogs from database */}
          {postsArray.map((post: any) => {
            return (
              <BlogListItem
                key={post.key}
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
