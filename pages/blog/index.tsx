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
    id: string;
    key: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    description: string;
    image: string;
  }[];
}) => {
  console.log(blogs);
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogHeader}>Blog Posts</h1>
      <ul className={styles.blogListContainer}>
        {/* isLoading ? isLoadingIcon : display list of blogs from database */}
        {blogs.map((blog: any) => {
          return (
            <BlogListItem
              id={blog.id}
              key={blog.id}
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
    "mongodb+srv://chris:MaJXk5VM5Xcqp4Ze@vidal.pl4gf.mongodb.net/blogs?retryWrites=true&w=majority"
  );

  //connecting to database and a specific collection
  const db = client.db();
  const blogsCollection = db.collection("blogsCollection");

  //once connected find
  const blogs = await blogsCollection.find().toArray();

  console.log(blogs);

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
