import weatherService from '../services/weatherService';
import CurrentWeather from './CurrentWeather';

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function CurrentCity() {

    const storeData = useSelector(state => state)
    const iconSize = '150'
    const textSize = '30'

    const [current, setCurrent] = useState({})
    const [city, setCity] = useState(storeData.city)

    useEffect(() => {
        getCurrentWeather()
        setCity(storeData.city)
    }, [storeData])

    const getCurrentWeather = async () => {
        const resp = await weatherService.getCurrent(storeData.city.Key)
        setCurrent(resp.data[0])
    }

    return (
        <div>
            <h1>{city.LocalizedName}</h1>
            <CurrentWeather current={current} iconSize={iconSize} textSize={textSize} />
        </div>
    );
}

export default CurrentCity;
