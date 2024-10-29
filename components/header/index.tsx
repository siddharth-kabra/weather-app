import SidebarComponent from '../side-bar';

const HeaderComponent = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarComponent />

      <div className="flex-1">
        <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
          <form action="" className="w-full max-w-md">
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
                placeholder="Search talk"
                aria-label="Search City"
                className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              />
            </div>
          </form>

          <div className="relative flex-shrink-0">
            <div className="mr-2 flex item-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.5C8.13 2.5 5 5.63 5 9.5C5 13.67 9.42 19.42 11.24 21.61C11.64 22.09 12.37 22.09 12.77 21.61C14.58 19.42 19 13.67 19 9.5C19 5.63 15.87 2.5 12 2.5ZM12 12C11.337 12 10.7011 11.7366 10.2322 11.2678C9.76339 10.7989 9.5 10.163 9.5 9.5C9.5 8.83696 9.76339 8.20107 10.2322 7.73223C10.7011 7.26339 11.337 7 12 7C12.663 7 13.2989 7.26339 13.7678 7.73223C14.2366 8.20107 14.5 8.83696 14.5 9.5C14.5 10.163 14.2366 10.7989 13.7678 11.2678C13.2989 11.7366 12.663 12 12 12Z"
                  fill="#3C6FD1"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_969"
                    x1="18.8506"
                    y1="2.81695"
                    x2="-12.7861"
                    y2="7.60046"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <span> City Name </span>
            </div>
          </div>
        </div>

        <main className="p-5">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Profile
            </button>
            <button
              type="button"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Settings
            </button>
            <button
              type="button"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Downloads
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeaderComponent;
