'use client';

import { setSelectedCity } from '@/libs/features/city';
import { useAppDispatch } from '@/libs/hooks';
import { CONSTANTS } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { v4 as uuidv4 } from 'uuid';
import SelectedCity from '../selected-city';

interface Props {
  data: string[];
}

const SearchBarComponent = ({ data }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1000);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dispatch = useAppDispatch();
  const filteredResults = data?.filter(
    item => item?.toLowerCase()?.includes(value?.toLowerCase()),
  );
  useEffect(() => {
    dispatch(setSelectedCity('London'));
  }, []);
  const handleSelectCity = async (item: string) => {
    dispatch(setSelectedCity(item));
    setSearchValue('');
    setIsDropdownVisible(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setIsDropdownVisible(true);
  };

  return (
    <div className="relative flex items-start justify-between text-gray-400 focus-within:text-gray-600">
      <div className="w-1/2">
        <div className="relative flex items-center">
          <svg
            className="w-5 h-5 absolute ml-3 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            name="search"
            placeholder="Search City from UK"
            onChange={handleInputChange} // Use the handler here
            autoComplete="off"
            value={searchValue}
            aria-label="Search City from UK"
            className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>
        {isDropdownVisible && value && filteredResults.length > 0 && (
          <ul className="mt-2 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredResults?.map(item => (
              <li
                key={uuidv4()}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectCity(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isDropdownVisible && searchValue && !filteredResults.length && (
        <p className="mt-2 w-1/2 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
          {CONSTANTS.NO_RESULTS_FOUND}
        </p>
      )}
      <SelectedCity />
    </div>
  );
};

export default SearchBarComponent;
