import Image from 'next/image';
import {
  clearConditions,
  cloudyConditions,
  partlyCloudyConditions,
  rainyConditions,
  snowConditions,
  windAndFogConditions,
} from './constants';

const WeatherIcon = ({ weatherCondition }: { weatherCondition: string }) => {
  const getWeatherIcon = (condition: string) => {
    if (rainyConditions.includes(condition)) {
      return '/images/rainy.svg';
    }
    if (snowConditions.includes(condition)) {
      return '/images/snowy.svg';
    }
    if (windAndFogConditions.includes(condition)) {
      return '/images/wind.svg';
    }
    if (cloudyConditions.includes(condition)) {
      return '/images/cloudy.svg';
    }
    if (partlyCloudyConditions.includes(condition)) {
      return '/images/p-cloudy.svg';
    }
    if (clearConditions.includes(condition)) {
      return '/images/clear.svg';
    }
  };
  return (
    <Image
      src={getWeatherIcon(weatherCondition) ?? '/images/clear.svg'}
      alt="Weather Icon"
      width={100}
      height={50}
      className="top-[-50px] left-0 right-0 m-auto"
    />
  );
};

export default WeatherIcon;
