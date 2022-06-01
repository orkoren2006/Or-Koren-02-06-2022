import Header from '../cmps/Header';
import { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'

import FavoriteCity from '../cmps/FavoriteCity';
import storageService from '../services/storageService';


function Favorites() {
    const storeData = useSelector(state => state)

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const cities = storageService.loadFromStorage('favorites')
        setFavorites(cities)
    }, [])

    return (
        <div className={storeData.theme ? 'bright' : 'dark'}>
            <Header />
            <div className='favorites'>
                {(favorites.length > 0) ?
                    <div className='flex wrap cities'>{favorites.map(city => {
                        return <FavoriteCity key={city.Key} city={city} />
                    })}
                    </div>
                    :
                    <div><p style={{fontSize:'25px'}}>No favorites here yet</p><div className='sad size-32' style={{display:'inline-block'}}></div></div>
                }
            </div>
        </div>
    );
}

export default Favorites;
