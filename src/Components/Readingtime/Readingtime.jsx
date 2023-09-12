import PropTypes from "prop-types";
const ReadingTime = ({ readTime }) => {
  return (
    <div className="bg-slate-200 h-20 rounded-md p-5">
      <h1 className="text-xl font-bold text-center">
        Spend time on read :{readTime}
      </h1>
    </div>
  );
};
ReadingTime.propTypes = {
  readTime: PropTypes.number.isRequired,
};
export default ReadingTime;
