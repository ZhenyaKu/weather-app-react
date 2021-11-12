import * as dayjs from 'dayjs'

import "./forecast-day.css";

export default function ForecastDay({ dayWeather }) {
    const weather = dayWeather.weather[0];
    const temp = Math.round(dayWeather.main.temp);
    const isPositive = temp >= 0;
    const tempSign = isPositive ? '+' : '';
    const day = dayjs(dayWeather.dt_txt).format('dddd')


    return <div className="ForecastDay">
        <div className="ForecastDay__title">
            {day}
        </div>
        <div className="ForecastDay__header">

            <img
                className="ForecastDay__weather-icon"
                src={
                    "https://openweathermap.org/img/wn/" +
                    weather.icon +
                    ".png"
                }
                alt={weather.main}
            />
            <span>{tempSign}{temp}°C</span>
        </div>
    </div>
}
