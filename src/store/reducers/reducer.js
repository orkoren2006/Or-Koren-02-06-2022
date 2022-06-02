const reducer = (state = {
  theme: true, metric: true, city: {LocalizedName: "Tel Aviv", Key: '215854'}, cities: [], forecast: [], 
}, action) => {

  switch (action.type) {

    case "THEME":
      return { ...state, theme: action.payload };

    case "METRIC":
      return { ...state, metric: action.payload };

    case "CITY":
      return { ...state, city: action.payload }

    case "CITIES":
      return { ...state, cities: action.payload }

    case "FORECAST":
      return { ...state, forecast: action.payload }

    default:
      return state;
  }
};


export default reducer;