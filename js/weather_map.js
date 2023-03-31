import {currentWeather, weatherForecast} from "./weather.js";

(async () => {

    let response = await currentWeather();
    return response;

    let forecast = await weatherForecast();
    console.log(forecast);


// const query = searchInput.value // selects node
})();