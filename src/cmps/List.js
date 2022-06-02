import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import weatherService from '../services/weatherService'


function List({clearSearch, cities}) {

    const dispatch = useDispatch()

    const [passedCities, setPassedCities] = useState([])

    useEffect(() => {
        setPassedCities(cities)
    }, [cities])

    const getCity = async city => {
        clearSearch();
        dispatch({type: "CITY", payload: city})
        const respForecast = await weatherService.getForecast(city.Key)
        dispatch({type: "FORECAST", payload: respForecast.data.DailyForecasts})
    }

    return (
        <div>
            {(passedCities.length > 0) && <div className='cityList'>
                {passedCities.map(city => {
                    return <div className='listLocation' key={city.Key} onClick={() => getCity(city)}><div className='flex center between'>{city.LocalizedName} <span style={{fontSize:'10px'}}>{city.Country.LocalizedName}</span></div></div>
                })}
            </div>
            }
        </div>
    );
}

export default List;
