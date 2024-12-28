import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ name, description, avatarUrl, link, repoData }) => {
  return (
    <div className="p-2 space-x-2 flex items-center  rounded-lg ">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="w-14 h-14 rounded-full mr-1"
      />
      <div className="flex flex-col space-y-[1] text-wrap overflow-hidden">
        <Link
          to={link}
          state={{ repo: repoData }}
          className="text-blue-500 hover:text-blue-700 text-base font-medium"
        >
          {name}
        </Link>
        <p className="text-sm text-gray-500 mb-2 overflow-hidden text-ellipsis line-clamp-2">
          {description || "No description available"}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  avatarUrl: PropTypes.string,
  link: PropTypes.string,
  repoData: PropTypes.object.isRequired,
};

export default Card;
