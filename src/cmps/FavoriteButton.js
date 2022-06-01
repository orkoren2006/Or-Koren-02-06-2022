import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import storageService from '../services/storageService';

function FavoriteButton() {

    const storeData = useSelector(state => state)

    const [city, setCity] = useState(storeData.city)
    const [favorites, setFvorites] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const cities = storageService.loadFromStorage('favorites')
        setFvorites(cities)
    }, [])

    useEffect(() => {
        setCity(storeData.city)
        checkIfFavorite()
    })

    const checkIfFavorite = () => {
        const index = favorites.findIndex(x => x.Key === city.Key)
        index != -1 ? setIsFavorite(true) : setIsFavorite(false)
    }

    const addToFavorites = () => {
        const newFavorites = [...favorites]
        newFavorites.push(city)
        setFvorites(newFavorites)
        storageService.saveToStorage('favorites', newFavorites)
    }

    const removeFromFavorites = () => {
        const newFavorites = [...favorites]
        const index = newFavorites.findIndex(x => x.Key === city.Key)
        newFavorites.splice(index, 1)
        setFvorites(newFavorites)
        storageService.saveToStorage('favorites', newFavorites)
    }

    return (
        <div className='flex favoriteButton'>
            {isFavorite ?
                <div onClick={removeFromFavorites} className='starFilled size-30 cover'></div>
                :
                <div onClick={addToFavorites} className='star size-30 cover'></div>
            }
        </div>
    );
}

export default FavoriteButton;
