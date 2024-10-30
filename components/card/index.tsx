'use client';

import dayjs from 'dayjs';
import React from 'react';
import { FaCloudMoon } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import SmallCard from '../small-card';
import { useAppSelector } from '@/libs/hooks';
import { WeatherData } from '@/types/interface';
import { CONSTANTS } from '@/utils/constants';
import { formatTimeTo12Hour } from '@/utils/helpers';

interface Props {
  weatherData?: WeatherData[];
  isLoading: boolean;
}

const Cards = ({ weatherData, isLoading }: Props) => {
  const activeTab = useAppSelector(state => state.selectedTab.activeTab);

  if (isLoading) {
    return <div className="text-emerald-600">Loading...</div>;
  }

  if (!weatherData || weatherData.length === 0) {
    return <div className="text-white">{CONSTANTS.NO_WEATHER_DATA}</div>;
  }
  return activeTab === 'Today' || activeTab === 'Tomorrow' ? (
    <div className="flex flex-wrap justify-center mx-6">
      <div className="flex text-white items-center p-8 rounded-md w-full sm:px-12 bg-gradient-to-r from-blue-700 to-blue-700/[0.7] mt-5">
        <div className="flex-1">
          <p>
            {dayjs
              ?.unix(weatherData[activeTab === 'Today' ? 0 : 1]?.datetimeEpoch)
              ?.format('MMMM D, YYYY')}
            °
          </p>
          <h2 className="text-xl font-semibold">
            {' '}
            {CONSTANTS.HUMIDITY}{' '}
            {weatherData[activeTab === 'Today' ? 0 : 1]?.humidity} %
          </h2>
          <h2 className="text-xl font-semibold">
            {CONSTANTS.WIND_SPEED}{' '}
            {weatherData[activeTab === 'Today' ? 0 : 1]?.windspeed}{' '}
            {CONSTANTS.KM_HR}
          </h2>
        </div>
        <div className="flex-1 text-center">
          <div className="flex items-start">
            <FaCloudMoon className="text-white text-[80px]" />
            <p className="text-[80px] font-semibold">
              {Math.ceil(weatherData[activeTab === 'Today' ? 0 : 1]?.temp)}°
            </p>
          </div>
          <p className="mt-[-20px]">
            {weatherData[activeTab === 'Today' ? 0 : 1]?.conditions}
          </p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-base font-medium">
            {CONSTANTS.MAX_TEMP}{' '}
            {Math.ceil(weatherData[activeTab === 'Today' ? 0 : 1]?.tempmax)}°
          </p>
          <p className="text-base font-medium">
            {CONSTANTS.MIN_TEMP}{' '}
            {Math.ceil(weatherData[activeTab === 'Today' ? 0 : 1]?.tempmin)}°
          </p>

          <p className="text-base font-medium">
            {CONSTANTS.SUNRISE_AT}{' '}
            {formatTimeTo12Hour(
              weatherData[activeTab === 'Today' ? 0 : 1]?.sunrise,
            )}
          </p>
          <p className="text-base font-medium">
            {CONSTANTS.SUNSET_AT}{' '}
            {formatTimeTo12Hour(
              weatherData[activeTab === 'Today' ? 0 : 1]?.sunset,
            )}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap">
      {weatherData
        ?.slice(2, 7)
        ?.map(item => <SmallCard item={item} key={uuidv4()} />)}
    </div>
  );
};

export default Cards;
