import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { cover, title, author, author_img, posted_date, reading_time } = blog;
  return (
    <div className="w-full h-[400px] mt-10">
      <img className="w-full h-full" src={cover}></img>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
