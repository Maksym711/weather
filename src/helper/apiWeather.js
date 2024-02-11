import {API_KEY, BASE_URL} from './constants'

const getCurrentWeatherUrl = (lat, lon) => {
    return `${BASE_URL}/current?lat=${lat}&lon=${lon}&key=${API_KEY}`
}

const getCurrentWeatherHourlyUrl = (lat, lon) => {
    return `${BASE_URL}/forecast/hourly?lat=${lat}&lon=${lon}&key=${API_KEY}`
}

const getCurrentWeatherDailyUrl = (lat, lon) => {
    return `${BASE_URL}/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEY}`
}

export {getCurrentWeatherUrl, getCurrentWeatherHourlyUrl, getCurrentWeatherDailyUrl}