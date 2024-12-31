interface MenuProps {
  toc: string[];
  fetchChapter: (chapterName: string) => Promise<void>;
}

const Menu = ({ toc, fetchChapter }: MenuProps) => {
  return (
    <div id="menu">
      <div className="pure-menu">
        <a className="pure-menu-heading" href="/">
          Table of Contents
        </a>

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
    </div>
  );
};

export default Menu;
