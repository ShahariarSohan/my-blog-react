import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { cover, title, author, author_img, posted_date, reading_time } = blog;
  return (
    <div className="w-full h-[400px] mb-32 space-y-3">
      <img className="w-full h-full rounded-md" src={cover}></img>
      <div className="flex justify-between">
        <div className="flex justify-center gap-5">
          <img className="w-14 h-14 rounded-full" src={author_img}></img>
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <span>Reading Time :{reading_time}</span>
          <button>
            <img
              className="w-8 h-8"
              src="./src/assets/bookmark-white.png"
            ></img>
          </button>
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
