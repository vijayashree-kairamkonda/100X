import PropTypes from "prop-types";

export const Avatar = ({ url, userName, userHandle }) => {
  return (
    <div className="flex space-x-2">
      <img src={url} />
      <div className="flex space-x-2 w-full items-center">
        <span className="font-semibold">{userName}</span>
        <span className="text-neutral-500">{userHandle}</span>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  url: PropTypes.any.isRequired,
  userName: PropTypes.string,
  userHandle: PropTypes.string,
};
