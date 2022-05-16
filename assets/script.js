   // functions to init the page
   function initPage() {
    const cityEl = document.getElementById("input-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("erase-history");
    const namecityEl = document.getElementById("city-names");
    const currentPictureEl = document.getElementById("current-pics");
    const currentTempEl = document.getElementById("temp");
    const currentHumEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-head");
    var todayweatherEl = document.getElementById("today-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    // unique API key, to variable
    const APIKey = "024bc9c739e79469ee12bea27c605827";

    // weather function / weather request 
    function getWeather(namecityEl){
        let query URL = "https://api.openweathermap.org/geo/1.0/direct?q=seattle&appid=d91f911bcf2c0f925fb6535547a5ddc9" + namecityEl + "&appid=" + APIKey;
        axios.get(queryURL)
        .then(function(respon){
            // today weather 

            todayweatherEl.classList.remove("d-none");

            // variable for current weather
            const currentDate = new Date(respon.data.dt * 1000);
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear() + 1;
            namecityEl.innerHTML = response.data.name + "("+ month +"/" + day + "/" + year +")";
            let weatherPic = respon.data.weather[0].icon;
            currentPictureEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPictureEl.setAttribute("alt", respon.data.weather[0].description);
            currentTempEl.innerHTML = "Temperature:" + k2f(response.data.main.temp) + "&#176F";
            currentHumidityEl.innerHTML = "Humidity:" + response.data.main.humidity + "%";
            currentWindEl.innerHTML = "Wind Speed:" + response.data.wind.speed + "MPH";


        })
    }

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}