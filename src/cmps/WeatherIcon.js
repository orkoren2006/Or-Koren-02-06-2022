import { useEffect, useState } from 'react'


function WeatherIcon({ icon, iconSize }) {

    const [symbol, setSymbol] = useState("")

    useEffect(() => {
        if (icon >= 1 && icon <= 2) {
            setSymbol('day')

        } else if (icon >= 3 && icon <= 5) {
            setSymbol('cloudy-day-1')

        } else if (icon == 6) {
            setSymbol('cloudy-day-3')

        } else if (icon >= 7 && icon <= 11) {
            setSymbol('cloudy')

        } else if (icon == 12) {
            setSymbol('rainy-5')

        } else if (icon >= 13 && icon <= 14) {
            setSymbol('rainy-1')

        }  else if (icon == 15) {
            setSymbol('thunder')

        } else if (icon >= 16 && icon <= 17) {
            setSymbol('rainy-3')

        } else if (icon == 18) {
            setSymbol('rainy-6')

        } else if (icon == 19) {
            setSymbol('cloudy')

        } else if (icon >= 20 && icon <= 21) {
            setSymbol('cloudy-day-2')

        } else if (icon == 22) {
            setSymbol('snowy-6')

        } else if (icon == 23) {
            setSymbol('snowy-2')

        } else if (icon == 24) {
            setSymbol('snowy-4')

        } else if (icon >= 25 && icon <= 29) {
            setSymbol('rainy-7')

        } else if (icon == 30) {
            setSymbol('day')

        } else if (icon >= 31 && icon <= 32) {
            setSymbol('cloudy')

        } else if (icon >= 33 && icon <= 34) {
            setSymbol('night')

        } else if (icon >= 35 && icon <= 38) {
            setSymbol('cloudy-night-3')

        } else if (icon >= 39 && icon <= 40) {
            setSymbol('rainy-5')

        } else if (icon >= 41 && icon <= 42) {
            setSymbol('thunder')

        } else if (icon >= 43 && icon <= 44) {
            setSymbol('snowy-5')

        } else {
            setSymbol('weather')

        }
    })

    return (
        <div className={`cover size-${iconSize} ${symbol}`}>

        </div>
    );
}

export default WeatherIcon;
