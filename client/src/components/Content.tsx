interface ContentProps {
  toc: string[];
  chapterContent: string | null;
  chapterTitle: string;
  fetchChapter: (chapterName: string | null) => void;
}

const Content = ({
  toc,
  chapterContent,
  chapterTitle,
  fetchChapter,
}: ContentProps) => {
  return (
    <div className="content">
      {chapterContent ? (
        <>
          <h2 className="content-subhead">{chapterTitle}</h2>
          <div className="chapter-content">{chapterContent}</div>
        </>
      ) : (
        <>
          <h2 className="content-subhead">{chapterTitle}</h2>
          <div className="pure-menu">
            <ul className="pure-menu-list">
              {toc.map((chapterTitle, idx) => {
                return (
                  <li
                    key={idx}
                    className="pure-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      fetchChapter(chapterTitle);
                    }}
                  >
                    <a href="#" className="pure-menu-link">
                      {chapterTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
