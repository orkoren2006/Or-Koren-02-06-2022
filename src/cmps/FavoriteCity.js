import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import weatherService from '../services/weatherService';
import CurrentWeather from './CurrentWeather';


function FavoriteCity({ city }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const iconSize = '64'
    const textSize = '20'

    const [current, setCurrent] = useState({})

    useEffect(() => {
        getCurrentWeather()
    }, [])

    const getCurrentWeather = async () => {
        const resp = await weatherService.getCurrent(city.Key)
        setCurrent(resp.data[0])
    }

    const showCityForecast = async () => {
        navigate('/')
        dispatch({ type: "CITY", payload: city })
        dispatch({ type: "CITIES", payload: [] })
        const respCurrent = await weatherService.getForecast(city.Key)
        dispatch({ type: "FORECAST", payload: respCurrent.data.DailyForecasts })
    }

    return (
        <div className='showFavorite' onClick={showCityForecast}>
            <h2>{city.LocalizedName}</h2>
            <CurrentWeather current={current} iconSize={iconSize} textSize={textSize}/>
        </div>
    );
}

export default FavoriteCity;
