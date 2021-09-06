//library import
import { MongoClient } from "mongodb";
import { GetStaticProps } from "next";

//componenets
import BlogListItem from "../../components/UI/BlogListItem";

//style import
import styles from "./BlogIndex.module.css";

const BlogPage = ({
  blogs,
}: {
  blogs: {
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
      <h1 className={styles.blogHeader}>Blog Posts</h1>
      <ul className={styles.blogListContainer}>
        {/* isLoading ? isLoadingIcon : display list of blogs from database */}
        {blogs.map((blog: any) => {
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
export const getStaticProps: GetStaticProps = async (context) => {
  //fetch data from an api
  //connect to the database client
  const client = await MongoClient.connect(
    "mongodb+srv://chris:MaJXk5VM5Xcqp4Ze@cluster0.pl4gf.mongodb.net/blogsCollection?retryWrites=true&w=majority"
  );

  const db = client.db();
  const blogCollection = db.collection("blogsCollection");

  //once connected find

  const blogs = await blogCollection.find().toArray();

  //close connection with database
  client.close();

  return {
    props: {
      blogs: blogs.map((blog) => ({
        title: blog.title,
        author: blog.author,
        date: blog.string,
        readTime: blog.readTime,
        description: blog.description,
        image: blog.image,
        id: blog._id.toString(),
      })),
    },
  };
};

export default BlogPage;
