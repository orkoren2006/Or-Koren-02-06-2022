import axios from 'axios'
const API = 'OM0cY7SqsG0YjQu3TsiLueHIcv0GqpIL'


const getLocations = async input => {
  return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete/?apikey=${API}&q=${input}`)
}

const getLocation = async input => {
  return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search/?apikey=${API}&q=${input}`)
}

const getCurrent = key => {
  return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API}`)
}

const getForecast = async key => {
  return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API}`)
}

export default {
  getLocations,
  getLocation,
  getCurrent,
  getForecast
}



// navigator.geolocation.getCurrentPosition(function (position) {
//   location.lat = position.coords.latitude;
//   console.log(position.coords.latitude);
//   location.lng = position.coords.longitude;
//   console.log(position.coords.longitude);
//   setLocation({...location, lat:position.coords.latitude})
//   setLocation({...location, lng:position.coords.longitude})
// });

// if (location.lat !=0) {
//   console.log('success');
//   const resp = await weatherService.getLocation(location.lat+","+location.lng)
//   console.log(resp.data);
//   getCurrentWeather(locationKey)

// } else {
//   getCurrentWeather(city.Key)
// }