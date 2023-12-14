import { Button } from "./Button";
import crossIcon from "../../assets/cross.svg";
import { Avatar } from "./Avatar";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Fieldset } from "./Fieldset";
import { Input } from "./Input";
import { TweetContext } from "../../context/Tweet/TweetContext";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({ user, handleTweet }) => {
  const navigate = useNavigate();
  const { tweetText, setTweetText } = useContext(TweetContext);

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="flex justify-between p-2">
            <img
              src={crossIcon}
              className="w-6 h-6"
              onClick={() => {
                window.location.pathname === "/home/create-post"
                  ? navigate("/home")
                  : navigate("/profile");
              }}
            />
            <Button
              variant="primary"
              width="sm"
              size="md"
              onClick={() => handleTweet()}
            >
              Post
            </Button>
          </div>
          <div className="flex items-center px-2">
            <div>
              <Avatar url={user?.userImage} />
            </div>
            <div className="w-full h-full">
              <Fieldset style="borderNone" legend="default">
                <Input
                  value={tweetText}
                  placeholder="What's happening.."
                  onChange={(e) => {
                    setTweetText(e.target.value);
                  }}
                  type="text"
                  textArea
                />
              </Fieldset>
            </div>
          </div>
        </div>
        <footer className="border-t-2 border-neutral-700 py-3 justify-self-end">
          <p className="text-neutral-500">0/280</p>
        </footer>
      </div>
    </>
  );
};

CreatePost.propTypes = {
  user: PropTypes.objectOf({
    userid: PropTypes.number,
    userName: PropTypes.string,
    userFullName: PropTypes.string,
    userImage: PropTypes.url,
  }),
  handleTweet: PropTypes.func,
};
