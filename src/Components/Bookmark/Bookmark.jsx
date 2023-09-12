import PropTypes from "prop-types";
const Bookmark = ({ bookmarks }) => {
  return (
    <div className="bg-slate-200  h-[600px] rounded-md mt-10 p-5">
      <h1 className="text-xl font-bold mb-5">
        Bookmarked Blogs :{bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <h1 className="text-lg font-bold bg-base-200 p-5 mb-3" key={idx}>
          {bookmark}
        </h1>
      ))}
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmark;
