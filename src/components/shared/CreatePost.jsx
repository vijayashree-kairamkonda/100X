import { Button } from "./Button";
import crossIcon from "../../assets/cross.svg";
import { Avatar } from "./Avatar";
import { TextInput } from "../shared/TextInput";
import PropTypes from "prop-types";

export const CreatePost = ({ user }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-between p-2">
          <img src={crossIcon} className="w-6 h-6" />
          <Button variant="primary" width="sm" size="md">
            Post
          </Button>
        </div>
        <div className="flex items-center px-2">
          <div>
            <Avatar url={user?.userImage} />
          </div>
          <div>
            <TextInput placeholder="What's happening?" base="borderNone" />
          </div>
        </div>
      </div>
      <footer className="border-t-2 border-neutral-700 py-3 justify-self-end">
        <p className="text-neutral-500">0/280</p>
      </footer>
    </div>
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
