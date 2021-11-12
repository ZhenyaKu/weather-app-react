
import "./current.css";

export default function Current({ currentWeather }) {

    const weather = currentWeather.weather[0];
    const temp = Math.round(currentWeather.main.temp);
    const isPositive = temp >= 0;
    const tempSign = isPositive ? '+' : '';

    return (
        <div className="Current">
            <div className="Current__info">
                <img
                    className="Current__weather-icon"
                    src={
                        "https://openweathermap.org/img/wn/" +
                        weather.icon +
                        ".png"
                    }
                    alt={weather.main}
                />
                <div>
                    <h2 className="other-info__city">
                        {currentWeather.name} (Today)
                    </h2>
                    <h3 className="other-info__city">
                        {tempSign}{temp} °C
                    </h3>
                </div>
            </div>
        </div>
    );
}