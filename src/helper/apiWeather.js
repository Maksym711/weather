import { uniqueBy } from '../helper/filter-repeat' 

const getCurrentWeather = (lat, lon, setWeatherData, setLoading, setError) => {
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=c2d3c64087e54d018cae06444bf6a848`)
    .then(data => data.json())
    .then(data => setWeatherData(data.data))
    .catch(() => {
        setLoading(false)
        setError(true)
    })
    .finally(() => setLoading(false))
}

const getCurrentWeatherHourly = (lat, lon, setWeatherHourly, setLoading, setError) => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&key=c2d3c64087e54d018cae06444bf6a848`)
        .then(data => data.json())
        .then(data => setWeatherHourly(data.data))
        .catch(() => {
            setLoading(false)
            setError(true)
        })
        .finally(() => setLoading(false))
}

const getCurrentWeatherDaily = (lat, lon, setWeatherSixteenDays, setLoading, setError) => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=c2d3c64087e54d018cae06444bf6a848`)
        .then(data => data.json())
        .then(data => setWeatherSixteenDays(data.data))
        .catch(() => {
            setLoading(false)
            setError(true)
        })
        .finally(() => setLoading(false))
}

const getCurrentNameCity = (lat, lon, setNameCity, setLoading, setError) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`)
        .then(data => data.json())
        .then(data => {
            setNameCity(data.address.city)
            setLoading(false)
        })
        .catch(() => {
            setLoading(false)
            setError(true)
        })
        .finally(() => setLoading(false))
}

const getCurrentOptionsCities = (inputValue, setFound, setCityOptions, setCounter) => {
    fetch(`http://api.geonames.org/searchJSON?name=${inputValue}&maxRows=100&username=mkskhjwssofwfjjcjw00&&&`)  // lang=ru
            .then(data => data.json())
            .then(data => {
                const filteredCities = data.geonames
                    .filter(filt => {
                        return filt.fclName === "city, village,..." 
                        && filt.fcodeName !== "section of populated place" 
                        && filt.lat && filt.lng 
                        && filt.name.toLowerCase().startsWith(inputValue.toLowerCase())
                    })
                    .sort((a,b)=> b.population - a.population)
                const uniqueFilteredCities = uniqueBy(filteredCities, (o1, o2) => o1.name === o2.name && o1.adminName1 === o2.adminName1 && o1.countryName === o2.countryName)
                uniqueFilteredCities.length === 0 ? setFound(true) : setFound(false)
                if(uniqueFilteredCities.length <= 6){
                    setCityOptions(uniqueFilteredCities)
                }
                if(uniqueFilteredCities.length > 6 && uniqueFilteredCities.length < 12){
                    setCityOptions(uniqueFilteredCities.slice(0, 6))
                }
                if(uniqueFilteredCities.length > 12 && uniqueFilteredCities.length < 18){
                    setCityOptions(uniqueFilteredCities.slice(0, 12))
                }
                if(uniqueFilteredCities.length > 18 && uniqueFilteredCities.length < 24){
                    setCityOptions(uniqueFilteredCities.slice(0, 18))
                }
                if(uniqueFilteredCities.length > 24 && uniqueFilteredCities.length < 30){
                    setCityOptions(uniqueFilteredCities.slice(0, 24))
                }
                if(uniqueFilteredCities.length > 30){
                    setCityOptions(uniqueFilteredCities.slice(0, 30))
                }
                setCounter(-1)
            })
            .catch(() => alert('error when searching for lists of cities'))
}

export {getCurrentWeather, getCurrentWeatherHourly, getCurrentWeatherDaily, getCurrentNameCity, getCurrentOptionsCities}