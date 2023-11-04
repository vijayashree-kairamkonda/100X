const SearchInput = () => {
  return (
    <div className="my-4 group flex items-center w-full px-4 gap-x-4 p-2 rounded-full border border-searchbar-fill bg-searchbar-fill focus-within:border-twitter-default">
      <svg
        className="fill-[#737373] group-focus-within:fill-twitter-default"
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={17}
        viewBox="0 0 17 17"
        fill="none"
      >
        <path d="M16.0446 15.2054L13.1471 12.3079C14.1961 11.065 14.8334 9.46109 14.8334 7.70834C14.8334 3.77375 11.643 0.583336 7.70837 0.583336C3.77379 0.583336 0.583374 3.77375 0.583374 7.70834C0.583374 11.6429 3.77379 14.8333 7.70837 14.8333C9.46192 14.8333 11.065 14.1968 12.3064 13.1471L15.2039 16.0446C15.3202 16.1602 15.473 16.2188 15.6235 16.2188C15.7739 16.2188 15.9282 16.161 16.043 16.0446C16.2766 15.8126 16.2766 15.4374 16.0446 15.2054ZM1.77087 7.70834C1.77087 4.43479 4.43483 1.77084 7.70837 1.77084C10.9819 1.77084 13.6459 4.43479 13.6459 7.70834C13.6459 10.9819 10.9819 13.6458 7.70837 13.6458C4.43483 13.6458 1.77087 10.9819 1.77087 7.70834Z" />
      </svg>
      <input
        className="w-full text-md bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
