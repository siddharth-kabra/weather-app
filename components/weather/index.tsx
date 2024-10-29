'use client';
import { useAppSelector } from '@/libs/hooks';
import TabComponent from '../tabs';
import { tabs } from '@/utils/constants';
import Cards from '../card';
import { useEffect, useState } from 'react';
import { getWeatherData } from '@/utils/api';

const WeatherComponent = () => {
  const selectedCity = useAppSelector(state => state.selectedCity.selectedCity);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const fetchWeatherData = async () => {
    try {
      const data = await getWeatherData(selectedCity ?? 'London');
      setWeatherData(data?.timelines?.daily);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (selectedCity !== undefined) {
      fetchWeatherData();
    }
  }, [selectedCity]);
  return (
    <>
      <TabComponent tabs={tabs} />
      <Cards weatherData={weatherData} />
    </>
  );
};

export default WeatherComponent;
