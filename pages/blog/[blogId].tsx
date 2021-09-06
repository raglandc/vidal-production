//library
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";

//temporary imports
import FounderPicture from "../../public/gonz.jpg";

//styles
import styles from "./BlogPost.module.css";

const BlogPost = ({
  postData,
}: {
  postData: {
    key: number;
    title: string;
    author: string;
    date: string;
    readTime: string;
    description: string;
    image: StaticImageData;
  };
}) => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.image}>
        <Image src={postData.image} alt="blog image" />
      </div>
      <div>
        <h2>{postData.title}</h2>
        <span>{postData.author}</span>
        <span>{postData.date}</span>
        <span>{postData.readTime}</span>
      </div>
      <div className={styles.blog}>{postData.description}</div>
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
          blogId: "my_first_blog",
        },
      },
      {
        params: {
          blogId: "my_second_blog",
        },
      },
    ],
  };
};

//dynamically fetch data and return data as props from server
export const getStaticProps: GetStaticProps = async (context) => {
  const blogId = context.params!.blogId;
  console.log(blogId);
  return {
    props: {
      postData: {
        key: 1,
        id: "my_first_blog",
        title: "My First Blog",
        author: "Chris Ragland",
        description:
          "This is just a short description of the great things coming.",
        date: "9.15.2021",
        readTime: "7 min",
        //string for now
        image: FounderPicture,
      },
    },
  };
};

export default BlogPost;
