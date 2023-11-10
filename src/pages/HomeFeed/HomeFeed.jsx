import { useContext } from "react";
import { FloatingBubble } from "../../components/shared/FloatingBubble";
import { Navigation } from "../../components/shared/Navigation";
import { Post } from "../../components/shared/Post";
import { Tabs } from "../../components/shared/Tabs";
import { HomeHeader } from "./HomeHeader";
import { HomeFeedContext } from "../../context/homeFeed/HomeFeedContext";
import { CreatePost } from "../../components/shared/CreatePost";
import { TweetContext } from "../../context/Tweet/TweetContext";

export const HomeFeed = () => {
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
    <>
      {openCreatePost ? (
        <CreatePost handleTweet={handleTweet} />
      ) : (
        <>
          <HomeHeader />
          <Tabs />
          <div className="overflow-auto pb-20">
            {tweets?.map((item, index) => (
              <div key={index}>
                <Post post={item?.post} meta={item?.meta} />
              </div>
            ))}
          </div>
          <FloatingBubble />
          <Navigation />
        </>
      )}
    </>
  );
};
