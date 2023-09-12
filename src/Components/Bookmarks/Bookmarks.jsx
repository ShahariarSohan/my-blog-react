import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import ReadingTime from "../ReadingTime/ReadingTime";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="w-1/3 ">
      <ReadingTime readTime={readTime}></ReadingTime>
      <Bookmark bookmarks={bookmarks}></Bookmark>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
};
export default Bookmarks;
