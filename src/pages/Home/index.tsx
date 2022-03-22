import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import WeatherContainer from "../../components/WeatherContainer";
import * as S from "./styles";
import { Search } from "@styled-icons/bootstrap/Search";
import { getCurrentDate } from "../../utils/getActualDate";
import { requestCitiesList } from "../../api/geoDBCitiesAPI";
import { requestWeatherInfo } from "../../api/openWeatherAPI";
import { lang } from "../../utils/setLanguage";
import { units } from "../../utils/setUnits";
import debounce from "lodash.debounce";
import ErrorDisplay from "../../components/ErrorDisplay";

const Home = () => {
  const { request } = useFetch();
  const [error, setError] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [weatherContainerVisible, setWeatherContainerVisible] = useState(false);
  const [iconVisible, setIconVisible] = useState(true);
  const [cityName, setCityName] = useState<string>("Cidade");
  const [temperature, setTemperature] = useState<string>("0º");
  const [weatherDescription, setWeatherDescription] =
    useState<string>("Descrição");
  const [windSpeed, setWindSpeed] = useState<string>("0/ms");
  const [humidityLevels, setHumidityLevels] = useState<string>("0%");
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const [imgSource, setImgSource] = useState<string>("");
  const [cities, setCities] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const icon: React.ReactNode = <Search />;

  const handleInputChange = debounce((cityName: string) => {
    if (cityName.length > 2) {
      setIsLoading(true);
      setIconVisible(false);
      getCitiesList(cityName);
    } else {
      setIsLoading(false);
      setIconVisible(true);
      setShowOptions(false);
    }
  }, 1000);

  const getCitiesList = async (cityName: string) => {
    // eslint-disable-next-line
    if (/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/.test(cityName)) {
      const { response } = await request(requestCitiesList(cityName));
      if (response.data.data.length === 0) {
        setIsLoading(false);
        setIconVisible(true);
        setError("Por favor, digite uma cidade válida");
        setErrorVisible(true);
        setWeatherContainerVisible(false);
        setShowOptions(false);
      } else {
        setShowOptions(true);
        const citiesRespond = response?.data.data?.map((city: any) => ({
          label: city.name,
          value: city.name,
        }));
        setCities(citiesRespond);
      }
    } else {
      setIsLoading(false);
      setIconVisible(true);
      setError("Por favor, digite uma cidade válida");
      setErrorVisible(true);
      setWeatherContainerVisible(false);
    }
  };

  const handleChange = (selectedOption: any) => {
    const selectedResponse = selectedOption.value;
    getWeatherInfo(selectedResponse);
  };

  const getWeatherInfo = async (searchTerm: string) => {
    const { response } = await request(
      requestWeatherInfo(searchTerm, lang, units)
    );
    if (!response) {
      setError(
        "Desculpe, não possuímos informações sobre a cidade selecionada. Tente informar outra cidade."
      );
      setWeatherContainerVisible(false);
      setErrorVisible(true);
    } else {
      setErrorVisible(false);
      setImgSource(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      setCityName(response.data.name);
      setTemperature(`${Math.ceil(response.data.main.temp)}º`);
      setWeatherDescription(response.data.weather[0].description);
      setWindSpeed(`${Math.floor(response.data.wind.speed)}m/s`);
      setHumidityLevels(`${response.data.main.humidity}%`);
      setCurrentTime(getCurrentDate());
      setWeatherContainerVisible(true);
    }
  };

  return (
    <S.HomeContainer>
      <S.SearchContainer>
        <S.SelectContainer>
          <S.CustomSelect
            classNamePrefix={"Select"}
            backspaceRemovesValue={false}
            isSearchable={true}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            onChange={handleChange}
            placeholder="Digite uma cidade"
            options={showOptions ? cities : []}
            noOptionsMessage={() => "Sem opções"}
          />
          {iconVisible && <S.Icon>{icon}</S.Icon>}
        </S.SelectContainer>
      </S.SearchContainer>
      {errorVisible && <ErrorDisplay error={error} />}
      {weatherContainerVisible && (
        <WeatherContainer
          imgSource={imgSource}
          cityName={cityName}
          temperature={temperature}
          weatherDescription={weatherDescription}
          currentTime={currentTime}
          windSpeed={windSpeed}
          humidityLevels={humidityLevels}
        />
      )}
    </S.HomeContainer>
  );
};

export default Home;
