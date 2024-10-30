"use client";

import dayjs from "dayjs";
import React from "react";
import { FaCloudMoon } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import SmallCard from "../small-card";
import { useAppSelector } from "@/libs/hooks";
import { WeatherData } from "@/types/interface";
import { CONSTANTS } from "@/utils/constants";
import { formatTimeTo12Hour } from "@/utils/helpers";

interface Props {
  weatherData?: WeatherData[];
  isLoading: boolean;
}

const Cards = ({ weatherData, isLoading }: Props) => {
  const activeTab = useAppSelector((state) => state.selectedTab.activeTab);

  if (isLoading) {
    return (
      <div className="mt-12 shadow rounded-md p-4 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="m-auto rounded-full bg-slate-200 h-20 w-20"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData || weatherData.length === 0) {
    return <div className="text-gray-500">{CONSTANTS.NO_WEATHER_DATA}</div>;
  }
  return activeTab === "Today" || activeTab === "Tomorrow" ? (
    <div className="flex flex-wrap justify-center">
      <div className="md:flex text-white items-center p-8 rounded-md w-full sm:px-12 bg-gradient-to-r from-blue-700 to-blue-700/[0.7] mt-5 hover:shadow-lg hover:shadow-blue-100 transition">
        <div className="flex-1">
          <p className="text-4xl font-extralight mb-2">
            {dayjs
              ?.unix(weatherData[activeTab === "Today" ? 0 : 1]?.datetimeEpoch)
              ?.format("MMMM D, YYYY")}
            °
          </p>
          <h2 className="text-xl font-light mb-2">
            {" "}
            {CONSTANTS.HUMIDITY}{" "}
            <span className="font-semibold">
              {weatherData[activeTab === "Today" ? 0 : 1]?.humidity} %
            </span>
          </h2>
          <h2 className="text-xl font-light">
            {CONSTANTS.WIND_SPEED}{" "}
            <span className="font-semibold">
              {weatherData[activeTab === "Today" ? 0 : 1]?.windspeed}{" "}
              {CONSTANTS.KM_HR}
            </span>
          </h2>
        </div>
        <div className="flex-0 text-center mt-5 md:mt-0">
          <div className="flex items-start">
            <FaCloudMoon className="text-white text-[80px]" />
            <p className="text-[80px] font-semibold">
              {Math.ceil(weatherData[activeTab === "Today" ? 0 : 1]?.temp)}°
            </p>
          </div>
          <p>{weatherData[activeTab === "Today" ? 0 : 1]?.conditions}</p>
        </div>
        <div className="flex-1 md:text-right">
          <p className="text-base font-light">
            {CONSTANTS.MAX_TEMP}{" "}
            <span className="font-bold">
              {Math.ceil(weatherData[activeTab === "Today" ? 0 : 1]?.tempmax)}°
            </span>
          </p>
          <p className="text-base font-light">
            {CONSTANTS.MIN_TEMP}{" "}
            <span className="font-bold">
              {Math.ceil(weatherData[activeTab === "Today" ? 0 : 1]?.tempmin)}°
            </span>
          </p>

          <p className="text-base font-light">
            {CONSTANTS.SUNRISE_AT}{" "}
            <span className="font-bold">
              {formatTimeTo12Hour(
                weatherData[activeTab === "Today" ? 0 : 1]?.sunrise
              )}
            </span>
          </p>
          <p className="text-base font-light">
            {CONSTANTS.SUNSET_AT}{" "}
            <span className="font-bold">
              {formatTimeTo12Hour(
                weatherData[activeTab === "Today" ? 0 : 1]?.sunset
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap mt-[50px]">
      {weatherData
        ?.slice(2, 7)
        ?.map((item) => <SmallCard item={item} key={uuidv4()} />)}
    </div>
  );
};

export default Cards;
