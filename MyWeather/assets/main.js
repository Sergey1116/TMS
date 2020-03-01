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

(async function () {
    const apiBaseUrl = "http://api.weatherstack.com/current?access_key=f6c4ef71c968415a71d2357e92e0d213";

    const getSearchCityUrl = cityName => {
        return `${apiBaseUrl}&query=${cityName.toLowerCase()}`;
    };

    try {
        let searchCityResp = await httpGet(getSearchCityUrl("minsk"));
        console.log(JSON.parse(searchCityResp));
        insertWeather(JSON.parse(searchCityResp));
        document.querySelector(".wether-module").setAttribute("display", "");
    } catch (ex) {
        console.log(ex);
    }
})();

function insertWeather(weatherObj) {
    document.querySelector(".location").textContent = weatherObj.request.query;

    document.querySelector(".date-time").textContent = new Date(weatherObj.location.localtime).toLocaleDateString();

    document.querySelector(".image-weather>img").setAttribute("srcset", weatherObj.current.weather_icons[0]);

    document.querySelector(".temperature>span").textContent = weatherObj.current.temperature;

    document.querySelector(".weather-descriptions").textContent = weatherObj.current.weather_descriptions.join(", ");

    document.querySelector(".observation_time>span").textContent = weatherObj.current.observation_time;

    let ex = document.querySelectorAll(".explanation>ul>li>span");

    let t = ["wind_speed", "wind_degree", "wind_dir", "pressure", "humidity", "feelslike", "uv_index", "visibility"];

    for (let i = 0; i < ex.length; i++) {
        ex[i].textContent = weatherObj.current[t[i]];
    }
}