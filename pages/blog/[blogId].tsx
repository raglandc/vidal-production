//library
import Image from "next/image";

//temporary imports
import { blogData } from "../blog/index";
import FounderPicture from "../../public/gonz.jpg";

//styles
import styles from "./BlogPost.module.css";

type BlogPostProps = {
  key: Number;
  title: String;
  author: String;
  blog: String;
  date: String;
  readTime: String;
  //string for now
  image: StaticImageData;
};

const BlogPost = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.image}>
        <Image src={FounderPicture} alt="blog image" />
      </div>
      <div>
        <h2>{blogData[0].title}</h2>
        <span>{blogData[0].author}</span>
        <span>{blogData[0].date}</span>
        <span>{blogData[0].readTime}</span>
      </div>
      <div className={styles.blog}>{blogData[0].description}</div>
    </div>
  );
};

export default BlogPost;
