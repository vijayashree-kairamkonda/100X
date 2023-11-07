import { Button } from "./Button";
import crossIcon from "../../assets/cross.svg";
import { Avatar } from "./Avatar";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { HomeFeedContext } from "../../context/homeFeed/HomeFeedContext";
import { posts } from "../../constants/Constants";
import { Fieldset } from "./Fieldset";
import { Input } from "./Input";

export const CreatePost = ({ user }) => {
  const { setOpenCreatePost } = useContext(HomeFeedContext);
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    posts.push({
      meta: {
        comments: 11,
        reposts: 20,
        likes: 10,
        views: 111,
      },
      post: {
        text: postText,
        postedBy: {
          userName: "@vijayshree",
          userFullName: "vijayashree k",
        },
      },
    });
    setOpenCreatePost(false);
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="flex justify-between p-2">
            <img
              src={crossIcon}
              className="w-6 h-6"
              onClick={() => {
                setOpenCreatePost(false);
              }}
            />
            <Button variant="primary" width="sm" size="md" onClick={handlePost}>
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
                  value={postText}
                  placeholder="What's happening.."
                  onChange={(e) => {
                    setPostText(e.target.value);
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
};
