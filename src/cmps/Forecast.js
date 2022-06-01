import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';

import weatherService from '../services/weatherService';
import WeatherIcon from './WeatherIcon';

function Forecast() {

    const storeData = useSelector(state => state)
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        getDefaultState()
        setForecast(storeData.forecast)
    }, [storeData])


    const getDefaultState = async () => {
        const resp = await weatherService.getForecast(storeData.city.Key)
        setForecast(resp.data.DailyForecasts)
    }

    return (
        <div>
            {(forecast.length > 0) && <div>
                <div className='flex wrap forecast'>
                    {forecast.map((day, index) => {
                        return <div className='flex column center' key={index} >
                            <div>{moment(day.Date).format('dddd')}</div>
                            <WeatherIcon icon={day.Day.Icon} iconSize='64'/>
                            {storeData.metric ?
                                <div className='flex'>
                                    {Math.round((day.Temperature.Minimum.Value - 32) * 0.5556)}<div style={{ fontSize: '10px' }}>{'\u2103'}</div>
                                    &nbsp;-&nbsp;
                                    {Math.round((day.Temperature.Maximum.Value - 32) * 0.5556)}<div style={{ fontSize: '10px' }}>{'\u2103'}</div>
                                </div>
                                :
                                <div className='flex'>
                                    {day.Temperature.Minimum.Value}<div style={{ fontSize: '10px' }}>{'\u2109'}</div>
                                    &nbsp;-&nbsp;
                                    {day.Temperature.Maximum.Value}<div style={{ fontSize: '10px' }}>{'\u2109'}</div>
                                </div>
                            }<br />
                            {day.Day.IconPhrase}<br />
                        </div>
                    })}
                </div>
            </div>
            }
        </div>
    );
}

export default Forecast;
