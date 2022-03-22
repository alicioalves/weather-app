import { lang } from "../utils/setLanguage";

const geoKey = process.env.GEO_DB_KEY;

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
      "x-rapidapi-key": `${geoKey}`,
    },
  };
};
console.log(geoKey);
