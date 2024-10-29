'use client';
import { useAppSelector } from '@/libs/hooks';
import TabComponent from '../tabs';

const WeatherComponent = () => {
  const selectedCity = useAppSelector(state => state.selectedCity.selectedCity);

  return <TabComponent />;
};

export default WeatherComponent;
