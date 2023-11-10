import { useState } from "react";
import PropTypes from "prop-types";
import { TweetContext } from "./TweetContext";

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState("");

  return (
    <TweetContext.Provider
      value={{ tweets, setTweets, tweetText, setTweetText }}
    >
      {children}
    </TweetContext.Provider>
  );
};

TweetProvider.propTypes = {
  children: PropTypes.any,
};
