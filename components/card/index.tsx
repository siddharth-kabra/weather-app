"use client";

import React from "react";
import { FaCloudMoon } from "react-icons/fa";
import { useAppSelector } from "@/libs/hooks";
import { WeatherData } from "@/types/interface";
import { formatTimeTo12Hour } from "@/utils/helpers";
import Image from "next/image";

interface Props {
  weatherData?: WeatherData;
}

const Cards = ({ weatherData }: Props) => {
  const activeTab = useAppSelector((state) => state.selectedTab.activeTab);
  const cardData = [
    {
      humidity: 77.9,
      conditions: "Partially cloudy",
      dew: 9.3,
      precipprob: 0,
      sunrise: "06:51:15",
      sunset: "16:36:19",
      temp: 13.1,
      tempmax: 15.2,
      tempmin: 10.5,
      windspeed: 7.2,
    },
  ];
  console.log(weatherData, activeTab);
  return (
    <div className="flex flex-wrap justify-center mx-6">
      <div className="flex text-white items-center p-8 rounded-md w-full sm:px-12 bg-gradient-to-r from-blue-700 to-blue-700/[0.7] mt-5">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">
            {" "}
            Humidity: {cardData[0].humidity} %
          </h2>
          <h2 className="text-xl font-semibold">
            {cardData[0].windspeed} km/hr
          </h2>
          <h2 className="text-xl font-semibold">
            {" "}
            Humidity: {cardData[0].humidity} %
          </h2>
          <h2 className="text-xl font-semibold">
            {cardData[0].windspeed} km/hr
          </h2>
        </div>
        <div className="flex-1 text-center">
          <div className="flex items-start">
            <FaCloudMoon className="text-white text-[80px]" />
            <p className="text-[80px] font-semibold">
              {Math.ceil(cardData[0].temp)}°
            </p>
          </div>
          <p className="mt-[-20px]">Sky is clear</p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-base font-medium">
            Max temp {Math.ceil(cardData[0].tempmax)}°
          </p>
          <p className="text-base font-medium">
            Min temp {Math.ceil(cardData[0].tempmin)}°
          </p>

          <p className="text-base font-medium">
            {formatTimeTo12Hour(cardData[0].sunrise)}
          </p>
          <p className="text-base font-medium">
            {formatTimeTo12Hour(cardData[0].sunset)}
          </p>
        </div>
      </div>
      {/* <div
        // key={index}
        className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-white shadow mt-5 mr-2"
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold">Name</h2>
          <p className="text-sm dark:text-gray-600">15/10/2020</p>
        </div>
        <Image
            src="/images/image-4.png"
            alt="Logo Name"
            width={200}
            height={100}
          />
        <div className="mb-2 text-3xl font-semibold">
          19°<span className="mx-1 font-normal">/</span>
          28°
        </div>
        <p className="dark:text-gray-600">hot</p>
      </div>
      <div
        // key={index}
        className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-white shadow mt-5 mx-2"
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold">Name</h2>
          <p className="text-sm dark:text-gray-600">15/10/2020</p>
        </div>
        <Image
            src="/images/image-4.png"
            alt="Logo Name"
            width={200}
            height={100}
          />
        <div className="mb-2 text-3xl font-semibold">
          19°<span className="mx-1 font-normal">/</span>
          28°
        </div>
        <p className="dark:text-gray-600">hot</p>
      </div>
      <div
        // key={index}
        className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-white shadow mt-5 mx-2"
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold">Name</h2>
          <p className="text-sm dark:text-gray-600">15/10/2020</p>
        </div>
        <Image
            src="/images/image-4.png"
            alt="Logo Name"
            width={200}
            height={100}
          />
        <div className="mb-2 text-3xl font-semibold">
          19°<span className="mx-1 font-normal">/</span>
          28°
        </div>
        <p className="dark:text-gray-600">hot</p>
      </div>
      <div
        // key={index}
        className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-white shadow mt-5 ml-2"
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold">Name</h2>
          <p className="text-sm dark:text-gray-600">15/10/2020</p>
        </div>
        <Image
            src="/images/image-4.png"
            alt="Logo Name"
            width={200}
            height={100}
          />
        <div className="mb-2 text-3xl font-semibold">
          19°<span className="mx-1 font-normal">/</span>
          28°
        </div>
        <p className="dark:text-gray-600">hot</p>
      </div> */}
     
    </div>
  );
};

export default Cards;
