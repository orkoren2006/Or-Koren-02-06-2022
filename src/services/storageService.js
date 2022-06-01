const loadFromStorage = (key) => {
  var val = localStorage.getItem(key)
  return (val) ? JSON.parse(val) : [];
}

const saveToStorage = (key, val) => {
  localStorage[key] = JSON.stringify(val);
}


export default {
  loadFromStorage,
  saveToStorage
}

