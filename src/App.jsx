import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Search from "./components/search/search";
import Current from "./components/current/current";
import RequestsHistory from "./components/requests-history/requests-history";
import Forecast from "./components/forecast/forecast";
import { getCurrentWeatherByCity, getForecastByCity } from "./services/api";
import { getCity, changeCity } from './store/features/citySlice';

import "./App.css";

const HISTORY_LIMIT = 10;

function App() {
  const city = useSelector(getCity)
  const dispatch = useDispatch();
  const setCity = (cityName) => {
    dispatch(changeCity(cityName))
  }

  const [currentWeather, setCurrentWeather] = useState();
  const [isCurrentWeatherLoading, setIsCurrentWeatherLoading] =
    useState(true);
  const [forecast, setForecast] = useState([]);
  const [isForecastLoading, setIsForecastLoading] = useState(true);
  const [requestsHistory, setRequestsHistory] = useState([]);

  const search = (currentCity) => {
    currentCity = currentCity || city;

    if (currentCity !== city) setCity(currentCity);

    setRequestsHistory((prevState) => {
      const newHistory = [currentCity, ...prevState];

      return newHistory.length <= HISTORY_LIMIT
        ? newHistory
        : newHistory.slice(0, HISTORY_LIMIT);
    });

    setIsCurrentWeatherLoading(true);
    setIsForecastLoading(true);

    getCurrentWeatherByCity(currentCity)
      .then(setCurrentWeather)
      .finally(() => setIsCurrentWeatherLoading(false));

    getForecastByCity(currentCity)
      .then((data) => {
        setForecast(data.forecast);
      })
      .finally(() => setIsForecastLoading(false));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="App">
      <div className="App__container">
        <Search
          onSearch={search}
          isLoading={isCurrentWeatherLoading || isForecastLoading}
        />

        {currentWeather && <Current currentWeather={currentWeather} />}

        <RequestsHistory
          requestsHistory={requestsHistory}
          historyLimit={HISTORY_LIMIT}
          onChangeCity={search}
        />

        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
