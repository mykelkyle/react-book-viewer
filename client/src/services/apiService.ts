import { sanitizeChapter } from "../utils";
const PATH = "/api";

export const getTocApi = async () => {
  try {
    const response = await fetch(PATH + "/toc");
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Failed fetching TOC");
  } catch (e) {
    console.log(e);
  }
};

export const getChapterApi = async (chapterName: string) => {
  try {
    const sanitizedChapterName = sanitizeChapter(chapterName);
    const response = await fetch(`${PATH}/${sanitizedChapterName}`);
    if (response.ok) {
      const data = await response.text();
      return data;
    }
    throw new Error("Failed fetching chapter content");
  } catch (e) {
    console.log(e);
  }
};
