"use client";
import { useEffect, useState } from "react";
import Cards from "../card";
import TabComponent from "../tabs";
import { useAppSelector } from "@/libs/hooks";
import { WeatherData } from "@/types/interface";
import { getWeatherData } from "@/utils/api";
import { tabs } from "@/utils/constants";

const WeatherComponent = () => {
  const selectedCity = useAppSelector(
    (state) => state.selectedCity.selectedCity,
  );
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const fetchWeatherData = async () => {
    try {
      const data = await getWeatherData(selectedCity ?? "London");
      setWeatherData(data);
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
    <div className="bg-white shadow m-5 p-8 rounded">
      <TabComponent tabs={tabs} />
      <Cards weatherData={weatherData} />
    </div>
  );
};

export default WeatherComponent;
