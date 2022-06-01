import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Switch from '../buttons/Switch'

function Header() {

    const dispatch = useDispatch()
    const storeData = useSelector(state => state)

    const switchMetric = () => {
        dispatch({ type: "METRIC", payload: !storeData.metric })
    }

    const switchTheme = () => {
        dispatch({ type: "THEME", payload: !storeData.theme })
    }

    const resetDefaultCity = () => {
        dispatch({ type: "CITY", payload: { LocalizedName: 'Tel Aviv', Key: '215854' } })
        dispatch({ type: "CITIES", payload: [] })
    }
 
    return (
        <div className="header">
            <div className='logo' onClick={resetDefaultCity}><Link to='/'>Weather<span style={{ fontSize: "20px" }}>app</span></Link></div>
            <div className='flex headerButtons'>
                {storeData.metric ?
                    <div onClick={switchMetric} className='celsius size-40 cover'></div>
                    :
                    <div onClick={switchMetric} className='fahrenheit size-40 cover'></div>}
                <br />
                <Switch switchTheme={switchTheme} />
                <Link to='/favorites'>My Favorites</Link>
            </div>
        </div>
    );
}

export default Header;
