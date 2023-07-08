const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "ac78a7102a26fee9b6db757a65a62e40"; // Paste your API here

const getWeatherDetails = (cityName, lat, lon) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(WEATHER_API_URL)
    .then((res) => res.json())
    .then((weather) => {
      console.log(weather);
      const { temp, temp_max, temp_min } = weather.list[0].main;
      document.querySelector(".condition").innerHTML =
        weather.list[0].weather[0].main;

      document.querySelector(".temp-main").innerHTML =
        Math.round(weather.list[0].main.temp) - 273 ;

      document.querySelector(".high-input").innerHTML =
        Math.round(weather.list[0].main.temp_max) - 273 + " &deg;c";

      document.querySelector(".down-input").innerHTML =
        Math.round(weather.list[0].main.temp_min) - 273 + " &deg;c";

      document.querySelector(".feels-input").innerHTML =
        Math.round(weather.list[0].main.feels_like) - 273 + " &deg;c";

      // document.querySelector(".sunrise-time-input").innerHTML =
      // window.Comment(weather.city.sunrise * 1000).format('HH:mm a');
      // // window.moment(weather.city.sunrise * 1000).format('HH:mm a');

      document.querySelector(
        ".icon"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png" class="weather-icon-main">`;
      
      
      
      document.querySelector(
        ".today-card-icon-9"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png" class="weather-icon">`;
      document.querySelector(".today-card-condition-9").innerHTML =
        weather.list[0].weather[0].main;
      document.querySelector(".today-temperature-9").innerHTML =
        Math.round(weather.list[0].main.temp) - 273 + " &deg;c";

      document.querySelector(
        ".today-card-icon-12"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.list[1].weather[0].icon}@4x.png" class="weather-icon">`;
      document.querySelector(".today-card-condition-12").innerHTML =
        weather.list[1].weather[0].main;
      document.querySelector(".today-temperature-12").innerHTML =
        Math.round(weather.list[1].main.temp) - 273 + " &deg;c";

      document.querySelector(
        ".today-card-icon-15"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.list[2].weather[0].icon}@4x.png" class="weather-icon">`;
      document.querySelector(".today-card-condition-15").innerHTML =
        weather.list[2].weather[0].main;
      document.querySelector(".today-temperature-15").innerHTML =
        Math.round(weather.list[2].main.temp) - 273 + " &deg;c";

      document.querySelector(
        ".today-card-icon-18"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.list[3].weather[0].icon}@4x.png" class="weather-icon">`;
      document.querySelector(".today-card-condition-18").innerHTML =
        weather.list[3].weather[0].main;
      document.querySelector(".today-temperature-18").innerHTML =
        Math.round(weather.list[3].main.temp) - 273 + " &deg;c";

      document.querySelector(
        ".today-card-icon-21"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.list[4].weather[0].icon}@4x.png" class="weather-icon">`;
      document.querySelector(".today-card-condition-21").innerHTML =
        weather.list[4].weather[0].main;
      document.querySelector(".today-temperature-21").innerHTML =
        Math.round(weather.list[4].main.temp) - 273 + " &deg;c";
    })
    .catch(() => {
      alert("An error occurred while fetching the forecast");
    });
};

const getAirPollution = (cityName, lat, lon) => {
  const AIR_API_URL = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(AIR_API_URL)
    .then((air) => air.json())
    .then((database) => {
      console.log(database);

      document.querySelector(".uv-input").innerHTML = database.list[0].main.aqi;

      if (database.list[0].main.aqi == "1") {
        document.querySelector(".uv-condition").innerHTML = `<p> Low </p>`;
      } else if (database.list[0].main.aqi == "2") {
        document.querySelector(".uv-condition").innerHTML = `<p> Low </p>`;
      } else if (database.list[0].main.aqi == "3") {
        document.querySelector(".uv-condition").innerHTML = `<p> Moderate </p>`;
      } else if (database.list[0].main.aqi == "4") {
        document.querySelector(".uv-condition").innerHTML = `<p> Moderate </p>`;
      } else if (database.list[0].main.aqi == "5") {
        document.querySelector(".uv-condition").innerHTML = `<p> Moderate </p>`;
      } else if (database.list[0].main.aqi == "6") {
        document.querySelector(".uv-condition").innerHTML = `<p> High </p>`;
      } else if (database.list[0].main.aqi == "7") {
        document.querySelector(".uv-condition").innerHTML = `<p> High </p>`;
      } else if (database.list[0].main.aqi == "8") {
        document.querySelector(".uv-condition").innerHTML = `<p> Very high </p>`;
      } else if (database.list[0].main.aqi == "9") {
        document.querySelector(".uv-condition").innerHTML = `<p> Very high </p>`;
      } else if (database.list[0].main.aqi == "10") {
        document.querySelector(".uv-condition").innerHTML = `<p> Very high </p>`;
      } else if (database.list[0].main.aqi == "11") {
        document.querySelector(".uv-condition").innerHTML = `<p> Extreme </p>`;
      } else if (database.list[0].main.aqi == "12") {
        document.querySelector(".uv-condition").innerHTML = `<p> Extreme </p>`;
      } else if (database.list[0].main.aqi == "13") {
        document.querySelector(".uv-condition").innerHTML = `<p> Extreme </p>`;
      }
    })
    .catch(() => {
      alert("An error occurred while air");
    });
};

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  fetch(GEOCODING_API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (!data.length) return alert(`No coordinates found for ${cityName}`);
      const { lat, lon, name } = data[0];
      getWeatherDetails(name, lat, lon);
      getAirPollution(name, lat, lon);

      document.querySelector(".city-display").innerHTML =
        data[0].name + "," + data[0].country;
    })
    .catch(() => {
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
