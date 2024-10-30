export const getUnitedKingdomCities = async () => {
  try {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    });
    const data = await res?.json();
    return data?.data?.filter(
      (item: { country: string }) => item.country === 'United Kingdom',
    );
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherData = async (city: string) => {
  try {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.NEXT_WEATHER_API_KEY}&contentType=json`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    );

    return await res?.json();
  } catch (error) {
    console.error(error);
  }
};
