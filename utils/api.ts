export const getUnitedKingdomCities = async () => {
  try {
    const res = await fetch(
      'https://countriesnow.space/api/v0.1/countries/cities',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: 'united kingdom',
        }),
        // revalidate time kept to 3600 to keep the cached data for 1 hour
        // next: { revalidate: 3600 },
      },
    );
    const data = await res?.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherData = async (city: string) => {
  try {
    const res = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${process.env.NEXT_WEATHER_API_KEY}`,
      { method: 'GET', headers: { accept: 'application/json' } },
    );
    return await res?.json();
  } catch (error) {
    console.error(error);
  }
};
