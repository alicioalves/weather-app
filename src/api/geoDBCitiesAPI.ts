import { lang } from "../utils/setLanguage";

export const requestCitiesList = (cityName: string) => {
  return {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: {
      limit: "5",
      namePrefix: cityName,
      sort: "-population",
      languageCode: `${lang}`,
    },
    headers: {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.REACT_APP_GEO_DB_KEY}`,
    },
  };
};
