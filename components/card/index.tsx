'use client';
import React from 'react';
import { useAppSelector } from '@/libs/hooks';
import { WeatherData } from '@/types/interface';

interface Props {
  weatherData?: WeatherData;
}

const Cards = ({ weatherData }: Props) => {
  const activeTab = useAppSelector(state => state.selectedTab.activeTab);

  const cardData = [
    {
      city: 'Dubai',
      date: 'July 29',
      tempHigh: 32,
      tempLow: 20,
      condition: 'Partly cloudy',
    },
    {
      city: 'New York',
      date: 'July 30',
      tempHigh: 28,
      tempLow: 18,
      condition: 'Sunny',
    },
    {
      city: 'London',
      date: 'July 31',
      tempHigh: 22,
      tempLow: 15,
      condition: 'Rainy',
    },
    {
      city: 'London',
      date: 'July 31',
      tempHigh: 22,
      tempLow: 15,
      condition: 'Rainy',
    },
    {
      city: 'London',
      date: 'July 31',
      tempHigh: 22,
      tempLow: 15,
      condition: 'Rainy',
    },
    // { city: 'London', date: 'July 31', tempHigh: 22, tempLow: 15, condition: 'Rainy' },
    // { city: 'London', date: 'July 31', tempHigh: 22, tempLow: 15, condition: 'Rainy' },
    // Add more card data as needed
  ];
  console.log(weatherData, activeTab);
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-gray-200 mt-5 mx-2"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold">{card.city}</h2>
            <p className="text-sm dark:text-gray-600">{card.date}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-32 h-32 p-6 dark:text-yellow-600 fill-current"
          >
            <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
            <rect width="32" height="48" x="240" y="16"></rect>
            <rect width="32" height="48" x="240" y="448"></rect>
            <rect width="48" height="32" x="448" y="240"></rect>
            <rect width="48" height="32" x="16" y="240"></rect>
            <rect
              width="32"
              height="45.255"
              x="400"
              y="393.373"
              transform="rotate(-45 416 416)"
            ></rect>
            <rect
              width="32.001"
              height="45.255"
              x="80"
              y="73.373"
              transform="rotate(-45 96 96)"
            ></rect>
            <rect
              width="45.255"
              height="32"
              x="73.373"
              y="400"
              transform="rotate(-45.001 96.002 416.003)"
            ></rect>
            <rect
              width="45.255"
              height="32.001"
              x="393.373"
              y="80"
              transform="rotate(-45 416 96)"
            ></rect>
          </svg>
          <div className="mb-2 text-3xl font-semibold">
            {card.tempHigh}°<span className="mx-1 font-normal">/</span>
            {card.tempLow}°
          </div>
          <p className="dark:text-gray-600">{card.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
