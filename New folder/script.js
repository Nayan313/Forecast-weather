const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "ac78a7102a26fee9b6db757a65a62e40"; // Paste your API here

const getWeatherDetails = (cityName, lat, lon) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
    console.log(data);
  }).catch(() => {
    alert("An error occurred while fetching the forecast");
});
}

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  fetch(GEOCODING_API_URL).then(response => response.json()).then(data => {
    if (!data.length) return alert(`No coordinates found for ${cityName}`);
    const { lat, lon, name } = data[0];
    getWeatherDetails(name, lat, lon);
}).catch(() => {
    alert("An error occurred while fetching the coordinates!");
});
};

searchButton.addEventListener("click", getCityCoordinates);


// searchButton.addEventListener("click", () => {
//     getCityCoordinates(cityInput.value);
//   });
//   searchButton.addEventListener("keypress", () => {
//     getCityCoordinates(cityInput.value);
//   });