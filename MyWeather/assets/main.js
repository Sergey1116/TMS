
mainSearch('Minsk');

window.onload = function(){
    setDayName();
    clock();
}

document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        mainSearch(document.getElementById('search').value);
    }
});


function httpGet(url) {
    return new Promise((resolve, reject) => {
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    resolve(httpRequest.responseText);
                } else {
                    reject(httpRequest);
                }
            }
        };

        httpRequest.onabort = function () {
            throw new Error("aborted");
        };

        httpRequest.open("GET", url);
        httpRequest.send();
    });
}

async function mainSearch(city) {
    const apiBaseUrl = "http://api.openweathermap.org/data/2.5/weather?appid=784d666d822b6f97fade28b03059669d&units=metric";

    const getSearchCityUrl = cityName => {
        return `${apiBaseUrl}&q=${cityName}`;
    };

    try {
        let searchCityResp = await httpGet(getSearchCityUrl(city));
        console.log(JSON.parse(searchCityResp));
        insertWeather(JSON.parse(searchCityResp));
    } catch (ex) {
        document.getElementById("search").value = "Not found";
        console.log(ex);
    }
};

function insertWeather(weatherObj) {
    document.getElementById("search").value = weatherObj.name;

    document.querySelector(".widget-weather>.header-ww>div>p").textContent = weatherObj.weather[0].description;

    document.querySelector(".widget-weather>.header-ww>img").src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weatherObj.weather[0].icon}.png`;

    document.querySelector(".widget-weather>.main-ww>.right>span").textContent = Math.round(weatherObj.main.temp);

    let liSpan = document.querySelectorAll(".widget-weather>.main-ww>.left>ul>li>span");
    liSpan[0].textContent = weatherObj.main.feels_like;
    liSpan[1].textContent = weatherObj.wind.speed;
    liSpan[2].textContent = weatherObj.main.humidity;
    liSpan[3].textContent = weatherObj.main.pressure;
}

function setDayName() {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', {
        weekday: 'long'
    });

    document.querySelector(".widget-weather>.fotter-ww>.weekday").textContent = day;

    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    setTimeout(setDayName, tomorrow - now)
};

function clock() {
    const time = new Date();
    document.querySelector(".widget-weather>.fotter-ww>.time").textContent = time.toLocaleTimeString('en-US');

    setInterval(clock, 500)
};