//library imports
import matter from "gray-matter";
import fs from "fs";
import path from "path";
////////////////////////////////////////////////////////

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(singlePost: string) {
  const postSlug = singlePost.replace(/\.md$/, ""); //removes file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA: any, postB: any) => {
    return postA.date < postB.date ? -1 : 1;
  });

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);

  return featuredPosts;
}
