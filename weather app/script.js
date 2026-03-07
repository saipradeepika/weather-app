const apiKey = "363919119f5ecb9a3a76619add48ff5a"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}?units=metric&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

document.getElementById("search-btn").addEventListener("click", () => {
    checkWeather(document.getElementById("city-input").value);
});
