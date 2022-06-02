import axios from 'axios'
const API = 'OM0cY7SqsG0YjQu3TsiLueHIcv0GqpIL'


const getLocations = async input => {
  return axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete/?apikey=${API}&q=${input}`)
}

const getCurrent = key => {
  return axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API}`)
}

const getForecast = async key => {
  return axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API}`)
}

export default {
  getLocations,
  getCurrent,
  getForecast
}
