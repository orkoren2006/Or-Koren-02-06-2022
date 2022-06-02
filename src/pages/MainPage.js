import Header from '../cmps/Header';
import List from '../cmps/List';
import CurrentCity from '../cmps/CurrentCity';
import Forecast from '../cmps/Forecast';
import FavoriteButton from '../cmps/FavoriteButton';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import weatherService from '../services/weatherService'

function MainPage() {

    const storeData = useSelector(state => state)

    const [search, setSearch] = useState("")
    const [open, setOpen] = useState(false)
    const [cities, setCities] = useState([])

    const changeSearch = async e => {
        setOpen(true)
        setSearch(e.target.value)
        const resp = await weatherService.getLocations(e.target.value)
        setCities(resp.data)
    }

    const clearSearch = async () => {
        setSearch("")
        setOpen(false)
    
    }
    return (
        <div className={storeData.theme ? 'bright' : 'dark'}>
            <Header />
            <div className='mainPage'>
                <div style={{position:'relatvie', display:'inline-block'}}>
                    <input type='text' placeholder='search any city' value={search} onChange={changeSearch} />
                    {open && <List clearSearch={clearSearch} cities={cities}/>}
                </div>
                <FavoriteButton />
                <CurrentCity />
                <Forecast/>
            </div>
        </div>
    );
}

export default MainPage;
