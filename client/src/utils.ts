export const sanitizeChapter = (chapterName: string) => {
  return chapterName.replace(" ", "-").toLowerCase();
};
