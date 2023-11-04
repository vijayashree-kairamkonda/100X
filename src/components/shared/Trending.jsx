import optionsIcon from "../../assets/options.svg";

const Trending = () => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="text-3xl font-bold ">What&apos;s happening</div>
      <div className="my-4 flex flex-col space-y-2">
        <div className="flex w-full justify-between items-center">
          <div className="text-neutral-500">Trending</div>
          <div>
            <img src={optionsIcon} />
          </div>
        </div>
        <div>#Madurai</div>
        <div className="text-neutral-500">2345 posts</div>
      </div>
      <div className="text-twitter-default">Show more</div>
    </div>
  );
};

export default Trending;
