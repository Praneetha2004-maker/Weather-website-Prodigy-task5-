let apikey = "847ec550175d1242227d39380f48116b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let cityInput = document.getElementById("cityInput");
let temperature = document.getElementById("temperature");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let weatherIcon = document.querySelector(".weather_icon");

async function fetchWeather(){
    if(cityInput.value === ""){
        alert("Please enter a city name");
        return;
    }
    
    let city = cityInput.value;
    let response = await fetch(`${apiUrl}q=${city}&appid=${apikey}`);
    let data = await response.json();
    
    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png";
    } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163667.png";
    }

    cityInput.value = "";
}