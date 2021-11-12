
import ForecastDay from './forecast-day/forecast-day'
import "./forecast.css";

export default function Forecast({ forecast }) {
    return <div className="Forecast">
        {forecast.map(dayWeather => <ForecastDay key={dayWeather.dt} dayWeather={dayWeather} />)}
    </div>;
}
