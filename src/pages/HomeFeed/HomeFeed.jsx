import { Post } from "../../components/shared/Post";
import Tabs from "../../components/shared/Tabs";
import HomeHeader from "./HomeHeader";

const HomeFeed = () => {
  return (
    <>
      <HomeHeader />
      <Tabs />
      <Post />
    </>
  );
};

export default HomeFeed;
