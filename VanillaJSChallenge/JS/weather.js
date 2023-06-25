const API_KEY = "4d3efb0179987ef042cb93e68baa1b6a";

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(lat, lon);
  console.log(url);
}
function handleGeoFailure() {
  console.log("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailure);