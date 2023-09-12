import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import Readingtime from "../Readingtime/Readingtime";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 ">
      <Readingtime></Readingtime>
      <Bookmark bookmarks={bookmarks}></Bookmark>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmarks;
