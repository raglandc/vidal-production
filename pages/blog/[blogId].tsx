//library
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

//local imports
import { getPostData, getPostFiles } from "../../lib/posts-util";
import ImageDiv from "../../components/UI/ImageDiv";

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
    content: string;
    image: string;
  };
}) => {
  return (
    <>
      <Head>
        <title>Vidal - {post.title}</title>
      </Head>
      <div className={styles.blogContainer}>
        <div>
          <h2 className={styles.blogTitle}>{post.title}</h2>
          <p className={styles.blogAuthor}>{post.author}</p>
          <div className={styles.blogInfo}>
            <p>{post.date}</p>
            <p>|</p>
            <p>{post.readTime} read</p>
          </div>
        </div>
        <Markdown
          options={{
            overrides: {
              img: {
                component: Image,
              },
              div: {
                component: ImageDiv,
              },
            },
          }}
        >
          {post.content}
        </Markdown>
        <div className={styles.backToOtherBlogs}>
          <Link href="/blog">&larr; back to other articles</Link>
        </div>
      </div>
    </>
  );
};

//dynamically rendering paths with next js
export const getStaticPaths: GetStaticPaths = async () => {
  const postFileNames = getPostFiles();

  const blogs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  const paths = blogs.map((blogId: string) => ({ params: { blogId: blogId } }));

  return {
    fallback: false,
    paths,
  };
};

//define type so slug exsists on params
interface IParams extends ParsedUrlQuery {
  slug: string;
}

//dynamically fetch data and return data as props from server
//next js built in static data fetching
export const getStaticProps: GetStaticProps = async (context) => {
  //fetch data from an api
  const { params } = context;

  const { blogId } = params as IParams;

  const post = getPostData(blogId as string);

  return {
    props: {
      post: post,
    },
  };
};

export default BlogPost;
