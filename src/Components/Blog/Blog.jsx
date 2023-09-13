import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="w-full  mb-16 space-y-3">
      <img className="w-full h-[300px] rounded-md" src={cover}></img>
      <div className="flex justify-between">
        <div className="flex justify-center gap-5">
          <img className="w-14 h-14 rounded-full" src={author_img}></img>
          <div>
            <h2 className="text-lg font-bold">{author}</h2>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 items-center text-gray-500">
          <span>Reading Time :{reading_time}</span>
          <button onClick={() => handleBookmark(title)}>
            <img className="w-8 h-8" src="logos/bookmark-white.png"></img>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex justify-start gap-2 text-gray-500">
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>#{hashtag}</span>
        ))}
      </div>
      <div>
        <button
          onClick={() => handleMarkAsRead(id, reading_time)}
          className="underline text-blue-700 font-bold"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
