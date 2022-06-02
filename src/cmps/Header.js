import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Switch from '../buttons/Switch'

function Header() {

    const dispatch = useDispatch()
    const storeData = useSelector(state => state)

    const [showBurger, setShowBurger] = useState(false)

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

    const toggleMenu = () => {
        setShowBurger(!showBurger)
    }

    const closeMenu = () => {
        setShowBurger(false)
    }

    return (
        <div className="header">
            <div className='logo' onClick={resetDefaultCity}><Link to='/'>Weather<span style={{ fontSize: "20px" }}>app</span></Link></div>
            <div className='flex headerButtons'>
                {storeData.metric ?
                    <div onClick={switchMetric} className='temperature celsius size-40 cover'></div>
                    :
                    <div onClick={switchMetric} className='temperature fahrenheit size-40 cover'></div>}
                <Switch switchTheme={switchTheme} />
                <Link to='/favorites'><h3>My Favorites</h3></Link>
            </div>
            <div className={showBurger ? `mobileButton buttonOpen close size-40 cover` : 'mobileButton burger size-40 cover'} onClick={toggleMenu}></div>
            <div className='allBurger'>
                <div className={showBurger ? 'screen' : ''} onClick={closeMenu}>
                </div>
                <div className={showBurger ? 'showBurger burgerContent' : 'hideBurger burgerContent'}>
                    <Switch switchTheme={switchTheme} />
                    {storeData.metric ?
                        <div onClick={switchMetric} className='temperature celsius size-64 cover'></div>
                        :
                        <div onClick={switchMetric} className='temperature fahrenheit size-64 cover'></div>}
                    <Link to='/favorites' onClick={closeMenu}><h2>My Favorites</h2></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
