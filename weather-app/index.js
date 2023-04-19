import { api_key } from'./keys.js';

const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener('click', () => {
    
  const APIKey = api_key;
  const city = document.querySelector('.search-box input').value;

  if (city === '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {


      if (json.cod === "404") {
        container.getElementsByClassName.height = "400px";
        weatherBox.getElementsByClassName.display = "none";
        weatherDetails.getElementsByClassName.display = "none";
        error404.getElementsByClassName.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(".weather-details .humidity span");
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.webp";
          break;

        case "Rain":
          image.src = "images/rain.webp";
          break;

        case "Snow":
          image.src = "images/snow.webp";
          break;

        case "Clouds":
          image.src = "images/clouds.webp";
          break;

        case "Haze":
          image.src = "images/haze.webp";
          break;

        default:
          image.src = "";
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${parseInt(json.main.humidity)}<span>%</span>`;
      wind.innerHTML = `${parseInt(json.wind.speed)}<span>km</span>`;
      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    });
});

// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "" || x == null) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

