import { useContext } from "react";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import { CreatePost } from "../../components/shared/CreatePost";
import { FloatingBubble } from "../../components/shared/FloatingBubble";
import { Navigation } from "../../components/shared/Navigation";
import { Post } from "../../components/shared/Post";
import { HomeFeedContext } from "../../context/homeFeed/HomeFeedContext";
import { TweetContext } from "../../context/Tweet/TweetContext";

export const Profile = () => {
  const { openCreatePost, setOpenCreatePost } = useContext(HomeFeedContext);
  const { tweets, setTweets, tweetText, setTweetText } =
    useContext(TweetContext);

  const handleTweet = () => {
    const newTweetObj = {
      meta: {
        likes: 0,
        reposts: 0,
        comments: 0,
        views: 0,
      },
      post: {
        text: tweetText,
        id: tweets?.length + 1,
      },
    };
    setTweets([...tweets, newTweetObj]);
    setTweetText("");
    setOpenCreatePost(false);
  };
  return (
    <div>
      {openCreatePost ? (
        <CreatePost handleTweet={handleTweet} />
      ) : (
        <>
          <ProfileHeader />
          <div className="overflow-auto pb-20">
            {tweets.map((item, index) => (
              <div key={index}>
                <Post post={item?.post} meta={item?.meta} />
              </div>
            ))}
          </div>
          <FloatingBubble />
          <Navigation />
        </>
      )}
    </div>
  );
};
