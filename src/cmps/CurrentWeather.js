import { useSelector } from 'react-redux'
import WeatherIcon from './WeatherIcon';

function CurrentWeather({current, iconSize, textSize}) {
    const storeData = useSelector(state => state)

    return (
        <div className='flex column center city'>
            {(current.Temperature) && <div className='flex column center'>
                    <WeatherIcon icon={current.WeatherIcon} iconSize={iconSize}/>
                <div style={{ fontSize: `${textSize}px` }} className='flex current' >
                    {storeData.metric
                        ?
                        Math.round(current.Temperature.Metric.Value)
                        :
                        current.Temperature.Imperial.Value}<div style={{ fontSize: `${textSize-10}px` }}>{storeData.metric ? '\u2103' : '\u2109'}</div>
                </div><br />
                <div style={{ fontSize: `${textSize}px` }}>{current.WeatherText}</div>
            </div>
            }
        </div>
    );
}

export default CurrentWeather;
