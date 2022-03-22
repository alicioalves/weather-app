export const requestWeatherInfo = (
  searchTerm: string,
  lang: string,
  units: string
) => {
  return {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${process.env.OPEN_WEATHER_KEY}&lang=${lang}&units=${units}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
};
