'use client';
import { useEffect, useState } from 'react';
import Cards from '../card';
import TabComponent from '../tabs';
import { useAppSelector } from '@/libs/hooks';
import { WeatherData } from '@/types/interface';
import { getWeatherData } from '@/utils/api';
import { tabs } from '@/utils/constants';

const WeatherComponent = () => {
  const selectedCity = useAppSelector(state => state.selectedCity.selectedCity);
  const [weatherData, setWeatherData] = useState<WeatherData[]>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const data = await getWeatherData(selectedCity ?? 'London');
      if (data) {
        setWeatherData(data?.days || []);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (selectedCity !== undefined) {
      fetchWeatherData();
    }
  }, [selectedCity]);

  return (
    <div className="bg-white shadow-md m-5 p-8 rounded flex-1 shadow-blue-100">
      <TabComponent tabs={tabs} />
      <Cards weatherData={weatherData} isLoading={isLoading} />
    </div>
  );
};

export default WeatherComponent;
