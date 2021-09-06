//library imports
import matter from "gray-matter";
import fs from "fs";
import path from "path";
////////////////////////////////////////////////////////

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); //removes file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA: any, postB: any) => {
    return postA.date > postB.date ? -1 : 1;
  });

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);

  return featuredPosts;
}
