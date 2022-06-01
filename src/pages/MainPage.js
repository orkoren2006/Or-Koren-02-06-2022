import Header from '../cmps/Header';
import List from '../cmps/List';
import CurrentCity from '../cmps/CurrentCity';
import Forecast from '../cmps/Forecast';
import FavoriteButton from '../cmps/FavoriteButton';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import weatherService from '../services/weatherService'

function MainPage() {

    const dispatch = useDispatch()
    const storeData = useSelector(state => state)

    const [search, setSearch] = useState("")

    const changeSearch = async e => {
        dispatch({ type: "OPEN", payload: true })
        setSearch(e.target.value)
        const resp = await weatherService.getLocations(e.target.value)
        dispatch({ type: "CITIES", payload: resp.data })
    }

    const clearSearch = () => {
        setSearch("")
    }
    return (
        <div className={storeData.theme ? 'bright' : 'dark'}>
            <Header />
            <div className='mainPage'>
                <div style={{position:'relatvie', display:'inline-block'}}>
                    <input type='text' placeholder='search any city' value={search} onChange={changeSearch} />
                    {storeData.open && <List clearSearch={clearSearch} />}
                </div>
                <FavoriteButton />
                <CurrentCity />
                <Forecast />
            </div>
        </div>
    );
}

export default MainPage;
