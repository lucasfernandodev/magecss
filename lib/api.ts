import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import getReadTime from "./read-time";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const readTime = getReadTime(content);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (field === "readTime") {
      items[field] = readTime;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export default function getPostBytags(filtro: string) {
  const arq = getPostSlugs();

  const posts = arq.map((post) => {
    const realSlug = post.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const readTime = getReadTime(content);
    data.readTime = readTime;

    return data;
  });

  const filtroPost = posts.filter((post) => {
    // O problem do filtro é que ele so filtra uma tag por vez

    const tagsString = post.tags || "geral";
    const tagsToArray = tagsString.split(" ");

    if (tagsToArray.length === 1) {
      if (tagsToArray[0] == filtro) {
        return post;
      }
    }

    if (tagsToArray.length > 1) {
      const isExisttags = tagsToArray.filter((item: string) => {
        if (item == filtro) {
          return item;
        }
      });

      // Essa confirmação so funciona enquanto não houver mais de duas tags sendo buscadas ao mesmo tempo
      if (isExisttags == filtro) {
        return post;
      }
    }
  });

  return filtroPost;
}
