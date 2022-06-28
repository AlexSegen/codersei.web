import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "data", "posts");

export const getFiles = async () =>
  fs.readdirSync(POSTS_PATH);

export const getSlugs = async () => {

  const files = await getFiles();
  
  const slugs = files.map(file => {
    const slug = file.replace(".mdx", "");
    return slug;
  });

  return slugs;

};

export const getAllPosts = async () => {
  
  const slugs = await getSlugs()

  return slugs.map((slug) =>  getPostFromSlug(slug))
  .sort((a, b) => {
    if (a.meta.date > b.meta.date) return 1;
    if (a.meta.date < b.meta.date) return -1;
    return 0;
  })
  .reverse();;
};

export const getPostFromSlug = (slug) => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      readingTime: readingTime(content) ?? null,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      category: data.category ?? "General",
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};