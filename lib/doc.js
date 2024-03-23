import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "docs");

export const getDocuments = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocuments.sort((first, second) => {
    if (first.order < second.order) {
      return -1;
    }
    if (first.order > second.order) {
      return 1;
    }
    return 0;
  });
};
