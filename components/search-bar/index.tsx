const SearchBarComponent = () => {
  return (
    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
      <svg
        className="w-5 h-5 absolute ml-3 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        name="search"
        placeholder="Search City"
        autoComplete="off"
        aria-label="Search City"
        className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
      />
    </div>
  );
};

export default SearchBarComponent;
