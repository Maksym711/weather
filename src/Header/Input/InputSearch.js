import React from 'react'
import { useState, useContext, useEffect, useRef } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
// import {uniqueBy} from '../../helper/filter-repeat'
import WeatherContext from '../../helper/weatherContext'
import closeIcons from '../../images/close_icon.png'
import './InputSearch.css'
import Loading from '../../components/Loading'
import ErrorFetch from '../../components/ErrorFetch'
import { getCurrentWeather, getCurrentWeatherHourly, getCurrentNameCity, getCurrentOptionsCities } from '../../helper/apiWeather' 



export default function InputSearch() {

const navigate = useNavigate()
const location = useLocation()
const weatherContext = useContext(WeatherContext)
const inputRef = useRef()
const optionRef = useRef()
const [cityOptions, setCityOptions] = useState([])
const [isFound, setFound] = useState(false)
const [isActiveInput, setActiveInput] = useState(false)
const [cityLocation, setCityLocation] = useState(null)
const [inputValue, setInputValue] = useState('')
const [counter, setCounter] = useState(-1)
const isActiveDelete = inputValue.length > 0
const [searchParams, setSearchParams] = useSearchParams()

useEffect(() => {
    if(weatherContext.nameCity && weatherContext.latCity && weatherContext.lonCity){
        setSearchParams({ lat: weatherContext.latCity, lon: weatherContext.lonCity ,city: weatherContext.nameCity})
    }
}, [weatherContext.nameCity, weatherContext.latCity, weatherContext.lonCity])

useEffect(() => {
    window.addEventListener('click', onClickOutsideInput)
    return () => window.removeEventListener('click', onClickOutsideInput)
},[])

const onClickOutsideInput = (e) => {
    if(!inputRef.current.contains(e.target)){
        setActiveInput(false)
    }
}

useEffect(() => {

    const latitude = searchParams.get('lat')
    const longitude = searchParams.get('lon')
    const city = searchParams.get('city')

    weatherContext.setLatCity(latitude)
    weatherContext.setLonCity(longitude)
    weatherContext.setNameCity(city)
    if(latitude && longitude){
        // fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`)
        // .then(data => data.json())
        // .then(data => {
        //     console.log(data)
        //     weatherContext.setNameCity(data.address.city)
        //     weatherContext.setLoading(false)
        // })
        // .catch(() => {
        //     weatherContext.setLoading(false)
        //     weatherContext.setError(true)
        // })

        weatherContext.setLoading(true)

        getCurrentWeather(latitude, longitude, weatherContext.setWeatherData, weatherContext.setLoading, weatherContext.setError)

        // weatherContext.setLoading(true)
        // fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=c2d3c64087e54d018cae06444bf6a848`)
        // .then(data => data.json())
        // .then(data => {
        //     weatherContext.setWeatherData(data.data)
        //     weatherContext.setLoading(false)
        // })
        // .catch(() => {
        //     weatherContext.setLoading(false)
        //     weatherContext.setError(true)
        // })

        getCurrentWeatherHourly(latitude, longitude, weatherContext.setWeatherHourly, weatherContext.setLoading, weatherContext.setError)

        // fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${latitude}&lon=${longitude}&key=c2d3c64087e54d018cae06444bf6a848`)
        // .then(data => data.json())
        // .then(data => weatherContext.setWeatherHourly(data.data))
        // .catch(() => {
        //     weatherContext.setLoading(false)
        //     weatherContext.setError(true)
        // })
    } else {
        const success = (position) => {

            const lat = position.coords.latitude
            const lon = position.coords.longitude
    
            weatherContext.setLatCity(lat)
            weatherContext.setLonCity(lon)

            weatherContext.setLoading(true)

            getCurrentNameCity(lat, lon, weatherContext.setNameCity, weatherContext.setLoading, weatherContext.setError)

            // fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`)
            // .then(data => data.json())
            // .then(data => {
            //     weatherContext.setNameCity(data.address.city)
            //     weatherContext.setLoading(false)
            // })
            // .catch(() => {
            //     weatherContext.setLoading(false)
            //     weatherContext.setError(true)
            // })
            
            getCurrentWeather(lat, lon, weatherContext.setWeatherData, weatherContext.setLoading, weatherContext.setError)

            // fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=c2d3c64087e54d018cae06444bf6a848`)
            // .then(data => data.json())
            // .then(data => weatherContext.setWeatherData(data.data))
            // .catch(() => {
            //     weatherContext.setLoading(false)
            //     weatherContext.setError(true)
            // })

            getCurrentWeatherHourly(lat, lon, weatherContext.setWeatherHourly, weatherContext.setLoading, weatherContext.setError)
    
            // fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&key=c2d3c64087e54d018cae06444bf6a848`)
            // .then(data => data.json())
            // .then(data => weatherContext.setWeatherHourly(data.data))
            // .catch(() => {
            //     weatherContext.setLoading(false)
            //     weatherContext.setError(true)
            // })

        }
    
        const error = () => {
            weatherContext.setLoading(false)
            weatherContext.setError(true)
        }
    
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }
    
    
},[])

useEffect(() => {
    const debounce = setTimeout(() => {
        if(inputValue.length > 0){
            getCurrentOptionsCities(inputValue, setFound, setCityOptions, setCounter)
            // fetch(`http://api.geonames.org/searchJSON?name=${inputValue}&maxRows=100&username=mkskhjwssofwfjjcjw00&&&`)  // lang=ru
            // .then(data => data.json())
            // .then(data => {
            //     const filteredCities = data.geonames
            //         .filter(filt => {
            //             return filt.fclName === "city, village,..." 
            //             && filt.fcodeName !== "section of populated place" 
            //             && filt.lat && filt.lng 
            //             && filt.name.toLowerCase().startsWith(inputValue.toLowerCase())
            //         })
            //         .sort((a,b)=> b.population - a.population)
            //     const uniqueFilteredCities = uniqueBy(filteredCities, (o1, o2) => o1.name === o2.name && o1.adminName1 === o2.adminName1 && o1.countryName === o2.countryName)
            //     uniqueFilteredCities.length === 0 ? setFound(true) : setFound(false)
            //     if(uniqueFilteredCities.length <= 6){
            //         setCityOptions(uniqueFilteredCities)
            //     }
            //     if(uniqueFilteredCities.length > 6 && uniqueFilteredCities.length < 12){
            //         setCityOptions(uniqueFilteredCities.slice(0, 6))
            //     }
            //     if(uniqueFilteredCities.length > 12 && uniqueFilteredCities.length < 18){
            //         setCityOptions(uniqueFilteredCities.slice(0, 12))
            //     }
            //     if(uniqueFilteredCities.length > 18 && uniqueFilteredCities.length < 24){
            //         setCityOptions(uniqueFilteredCities.slice(0, 18))
            //     }
            //     if(uniqueFilteredCities.length > 24 && uniqueFilteredCities.length < 30){
            //         setCityOptions(uniqueFilteredCities.slice(0, 24))
            //     }
            //     if(uniqueFilteredCities.length > 30){
            //         setCityOptions(uniqueFilteredCities.slice(0, 30))
            //     }
            //     setCounter(-1)
            // })
            // .catch(() => alert('error when searching for lists of cities'))
        }
        else{
            setCityOptions([])
            setFound(false)
        }
    },1000)

    return () => clearTimeout(debounce)

},[inputValue])

const handleInput = (e) => {
    setInputValue(e.target.value)
}

const handleSearchClick = (item) => {

    weatherContext.setLatCity(item.lat)
    weatherContext.setLonCity(item.lng)
    weatherContext.setNameCity(item.name)
    setInputValue('')
    setCityOptions([])
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if(location.pathname !== ''){
        navigate('/')
    }
    weatherContext.setError(false)
    weatherContext.setLoading(true)

    getCurrentWeather(item.lat, item.lng, weatherContext.setWeatherData, weatherContext.setLoading, weatherContext.setError)

    // fetch(`https://api.weatherbit.io/v2.0/current?lat=${item.lat}&lon=${item.lng}&key=c2d3c64087e54d018cae06444bf6a848`)
    // .then(response  => response.json())
    // .then(response  => {
    //     weatherContext.setWeatherData(response.data)
    // })
    // .catch(() => {
    //     weatherContext.setLoading(false)
    //     weatherContext.setError(true)
    // })
    // .finally(() => weatherContext.setLoading(false))

    getCurrentWeatherHourly(item.lat, item.lng, weatherContext.setWeatherHourly, weatherContext.setLoading, weatherContext.setError)

    // fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${item.lat}&lon=${item.lng}&key=c2d3c64087e54d018cae06444bf6a848`)
    //     .then(data => data.json())
    //     .then(data => weatherContext.setWeatherHourly(data.data))
    //     .catch(() => {
    //         weatherContext.setLoading(false)
    //         weatherContext.setError(true)
    //     })
}

const onKey = (e) => {
    if(e.key === 'Enter'){
        handleSearchClick(cityLocation)
        inputRef.current.blur()
    }
    if(e.key === 'ArrowDown' && counter < cityOptions.length - 1){
        e.preventDefault()
        setCounter((prev) => prev + 1)
        setCityLocation(cityOptions[counter + 1])
    }
    if(e.key === 'ArrowUp' && counter >= 0){
        e.preventDefault()
        setCounter((prev) => prev - 1)
        setCityLocation(cityOptions[counter - 1])
    }

    if(e.key === 'ArrowDown' && counter > 0 && Number.isInteger((counter + 1) / 6)){
        e.preventDefault()
        optionRef.current.scrollBy({ top: 300, behavior: 'smooth' })
    }

    if(e.key === 'ArrowUp' && counter % 6 === 0){
        e.preventDefault()
        optionRef.current.scrollBy({ top: -300, behavior: 'smooth' })
    }
}

const onMouseEnter = (item, index) => {
    setCityLocation(item)
    setCounter(index)
}

const onClickDelete = () => {
    setFound(false)
    setCityOptions([])
    setInputValue('')
    inputRef.current.focus()
}

const onClickIsFound = (e) => {
    e.stopPropagation()
    inputRef.current.focus()
}

return (
<div className='search-wrapper'>
    {weatherContext.isLoading && <Loading />}
    {weatherContext.isError && <ErrorFetch />}
    <div className='input-search'>
        <input
            ref={inputRef}
            value={inputValue}
            className='input-search'
            placeholder='🔍︎ Search location'
            type="text" 
            onInput={handleInput}
            onFocus={() => setActiveInput(true)}
            onChange={() => setActiveInput(true)}
            onKeyDown={onKey}
        />
        {isActiveDelete && <img onClick={onClickDelete} src={closeIcons} alt="delete_text" />}
    </div>
    <ul className={isActiveInput ? 'lists-wrapper active' : 'lists-wrapper'} ref={optionRef}>   
        {isFound && <li className='not-found' onClick={onClickIsFound}>city not found</li>}
        {cityOptions.map((item, index) => 
        <li 
            key={index} 
            onClick={() => handleSearchClick(item)} 
            onMouseEnter={() => onMouseEnter(item, index)}
            className={index === counter ? 'focused' : ''}
        >
            <h3>{item.name}</h3>
            <div className='city-details'>
                {item.adminName1 && <p>{item.adminName1},</p>}
                {item.countryName && <p>{item.countryName}</p>}
            </div>
        </li>)}
    </ul>
</div>
)
}
