import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import weatherService from '../services/weatherService'


function List({clearSearch}) {

    const dispatch = useDispatch()
    const storeData = useSelector(state => state)

    const [cities, setCities] = useState([])

    useEffect(() => {
        setCities(storeData.cities)
    }, [storeData])

    const getCity = async city => {
        clearSearch();
        dispatch({type: "OPEN", payload: false})
        dispatch({type: "CITY", payload: city})
        const respForecast = await weatherService.getForecast(city.Key)
        dispatch({type: "FORECAST", payload: respForecast.data.DailyForecasts})
    }

    return (
        <div>
            {(cities.length > 0) && <div className='cityList'>
                {cities.map(city => {
                    return <div className='listLocation' key={city.Key} onClick={() => getCity(city)}><div className='flex center between'>{city.LocalizedName} <span style={{fontSize:'10px'}}>{city.Country.LocalizedName}</span></div></div>
                })}
            </div>
            }
        </div>
    );
}

export default List;
