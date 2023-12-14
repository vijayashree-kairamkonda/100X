import homeOutlinedIcon from "../../assets/home-outline.svg";
import profileOutlinedIcon from "../../assets/profile.svg";
import homeFilledIcon from "../../assets/home.svg";
import profileFilledIcon from "../../assets/profile-filled.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Navigation = ({ items = {} }) => {
  const navigate = useNavigate();

  console.log(items);
  const handleHome = () => {
    navigate("/home");
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <div>
      <footer className="flex items-center w-full justify-center bg-black py-4 mt-2 fixed bottom-0 space-x-16 border-t-2 border-neutral-700">
        <div className="flex space-x-4">
          <span>
            {window.location.pathname === "/home" ? (
              <img src={homeFilledIcon} onClick={handleHome} />
            ) : (
              <img src={homeOutlinedIcon} onClick={handleHome} />
            )}
          </span>
        </div>
        <div className="flex space-x-4">
          <span>
            {window.location.pathname === "/profile" ? (
              <img src={profileFilledIcon} onClick={handleProfile} />
            ) : (
              <img src={profileOutlinedIcon} onClick={handleProfile} />
            )}
          </span>
        </div>
      </footer>
    </div>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf([
    {
      itemName: PropTypes.string,
      href: PropTypes.func,
    },
  ]),
};
