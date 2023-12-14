import plusIcon from "../../assets/plus.svg";
import { useNavigate } from "react-router-dom";

export const FloatingBubble = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span className="flex justify-end fixed bottom-16 right-0 mx-3">
        <img
          src={plusIcon}
          className="bg-twitter-default rounded-full p-4"
          onClick={() =>
            window.location.pathname === "/home"
              ? navigate("/home/create-post")
              : navigate("/profile/create-post")
          }
        />
      </span>
    </div>
  );
};
