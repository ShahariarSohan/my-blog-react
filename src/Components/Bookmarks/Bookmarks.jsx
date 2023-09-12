import Bookmark from "../Bookmark/Bookmark";
import Readingtime from "../Readingtime/Readingtime";

const Bookmarks = () => {
  return (
    <div className="w-1/3 ">
      <Readingtime></Readingtime>
      <Bookmark></Bookmark>
    </div>
  );
};

export default Bookmarks;
