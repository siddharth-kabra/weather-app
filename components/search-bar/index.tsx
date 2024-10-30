'use client';

import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { v4 as uuidv4 } from 'uuid';
import SelectedCity from '../selected-city';
import { setSelectedCity } from '@/libs/features/city';
import { useAppDispatch } from '@/libs/hooks';
import { CONSTANTS } from '@/utils/constants';
import { FaSearch } from 'react-icons/fa';

interface Props {
  data: string[];
}

const SearchBarComponent = ({ data }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [value, { isPending }] = useDebounce(searchValue, 1000);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  console.log(isPending());
  const dispatch = useAppDispatch();
  const filteredResults = data?.filter(
    item => item?.toLowerCase()?.includes(value?.toLowerCase()),
  );
  useEffect(() => {
    dispatch(setSelectedCity('London'));
  }, [dispatch]);
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
    <div className="relative w-full flex items-start justify-between text-gray-400 focus-within:text-gray-600">
      <div className="w-1/2 relative mt-3">
        <div className="relative flex items-center">
          <FaSearch className="font-light text-gray-400 absolute ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder={CONSTANTS.PLACEHOLDER}
            onChange={handleInputChange}
            autoComplete="off"
            value={searchValue}
            aria-label={CONSTANTS.PLACEHOLDER}
            className="w-full pr-3 pl-10 py-2 placeholder-gray-400 text-black rounded border-none focus:ring-0 focus:ring-transparent"
          />
        </div>
        {searchValue && isPending() && (
          <ul className="mt-2 bg-white text-center rounded-md shadow-lg max-h-60 overflow-y-auto absolute right-0 left-0">
            <div
              className="w-8 h-8 my-3 rounded-full animate-spin m-auto
                    border-2 border-solid border-blue-700 border-t-transparent"
            ></div>
          </ul>
        )}
        {isDropdownVisible && value && filteredResults.length > 0 && (
          <ul className="mt-2 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto absolute right-0 left-0">
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
        {isDropdownVisible && searchValue && !filteredResults.length && (
          <p className="mt-2 min-h-[100px] absolute right-0 left-0 flex items-center justify-center bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
            {CONSTANTS.NO_RESULTS_FOUND}
          </p>
        )}
      </div>
      <SelectedCity />
    </div>
  );
};

export default SearchBarComponent;
