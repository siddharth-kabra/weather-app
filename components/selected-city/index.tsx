import { useAppSelector } from '@/libs/hooks';

const SelectedCity = () => {
  const selectedCity = useAppSelector(state => state.selectedCity.selectedCity);

  return (
    <div className="relative flex-shrink-0">
      <div className="flex item-center">
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
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <span>{selectedCity}</span>
      </div>
    </div>
  );
};

export default SelectedCity;
