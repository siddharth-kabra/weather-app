'use client';

import dayjs from 'dayjs';
import React from 'react';
import { FaCloudMoon } from 'react-icons/fa';
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

  console.log(weatherData, isLoading);
  return (
    (activeTab === 'Today' || activeTab === 'Tomorrow') &&
    weatherData && (
      <div className="flex flex-wrap justify-center mx-6">
        <div className="flex text-white items-center p-8 rounded-md w-full sm:px-12 bg-gradient-to-r from-blue-700 to-blue-700/[0.7] mt-5">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {' '}
              Humidity: {weatherData[activeTab === 'Today' ? 0 : 1]?.humidity} %
            </h2>
            <h2 className="text-xl font-semibold">
              {weatherData[activeTab === 'Today' ? 0 : 1]?.windspeed} km/hr
            </h2>
            <h2 className="text-xl font-semibold">
              {' '}
              Humidity: {weatherData[activeTab === 'Today' ? 0 : 1]?.humidity} %
            </h2>
            <h2 className="text-xl font-semibold">
              {weatherData[activeTab === 'Today' ? 0 : 1]?.windspeed} km/hr
            </h2>
          </div>
          <div className="flex-1 text-center">
            <div className="flex items-start">
              <p>
                {dayjs
                  ?.unix(
                    weatherData[activeTab === 'Today' ? 0 : 1]?.datetimeEpoch,
                  )
                  ?.format('MMMM D, YYYY')}
                °
              </p>
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
              Max temp{' '}
              {Math.ceil(weatherData[activeTab === 'Today' ? 0 : 1]?.tempmax)}°
            </p>
            <p className="text-base font-medium">
              Min temp{' '}
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
    )
  );
};

export default Cards;
