import { Avatar } from "./Avatar";
import avatarIcon from "../../assets/avatar.png";
import commentIcon from "../../assets/comment.svg";
import reTweetIcon from "../../assets/retweet.svg";
import heartIcon from "../../assets/heart.svg";
import reachIcon from "../../assets/reach.svg";
import shareIcon from "../../assets/share.svg";

export const Post = () => {
  return (
    <section className="text-neutral-50 flex flex-col gap-4 w-full border-b-2 border-neutral-700 py-4 px-3">
      <Avatar url={avatarIcon} userName={"Name"} userHandle={"@handle"} />
      <div className="w-9/12 flex flex-col space-y-6 pl-10">
        <div>Don&apos;t wish for it, work for it.</div>
        <div className="flex space-x-8 items-center ">
          <div className="flex gap-1 items-center">
            <img src={commentIcon} alt="comment" />
            <span>11</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={reTweetIcon} alt="retweet" />
            <span>269</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={heartIcon} alt="heart" />
            <span>1,869</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={reachIcon} alt="reach" />
            <span>69.9k</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={shareIcon} alt="share" />
          </div>
        </div>
      </div>
    </section>
  );
};
