import axios from 'axios';


const customAxios = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})
const apiKey = 'ac50c00be361ae51a28bda0f97697967'
const baseParams = `&units=metric&appid=${apiKey}`;

export const getCurrentWeatherByCity = (city = 'Kyiv') => {
    return customAxios.get(`/weather?q=${city}${baseParams}`).then(({ data }) => data)
}

export const getForecastByCity = (city = 'Kyiv') => {
    return customAxios.get(`/forecast?q=${city}${baseParams}`).then(({ data }) => {
        return {
            city: data.city,
            forecast: data.list.filter(day => day.dt_txt.includes('12:00:00')) // return filtered by midday
        }
    })
}
