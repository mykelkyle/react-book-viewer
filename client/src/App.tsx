import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Content from "./components/Content";
import { getTocApi, getChapterApi } from "./services/apiService";
import "./App.css";

function App() {
  const [toc, setToc] = useState<string[]>([]);
  const [chapterContent, setChapterContent] = useState<string | null>(null);
  const [chapterTitle, setChapterTitle] = useState<string>("");

  useEffect(() => {
    fetchToc();
  }, []);

  const fetchToc = async () => {
    try {
      const data = await getTocApi();
      setToc(data.chapters);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchChapter = async (chapterName: string | null) => {
    if (typeof chapterName === "string") {
      const content = await getChapterApi(chapterName);
      if (content) {
        setChapterTitle(chapterName);
        setChapterContent(content);
      } else {
        console.log("Chapter content could not be found");
      }
    }
  };

  return (
    <div id="layout">
      <Menu toc={toc} fetchChapter={fetchChapter} />
      <div id="main">
        <Header />
        <Content
          toc={toc}
          chapterContent={chapterContent}
          chapterTitle={chapterTitle}
          fetchChapter={fetchChapter}
        />
      </div>
    </div>
  );
}

export default App;
