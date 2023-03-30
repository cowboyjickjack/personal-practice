/** GETTING THE CURRENT WEATHER DATA AND LOOPING 5 TIMES **/
export const currentWeather = async () => {
    try {
        for (let i = 1; i <= 5; i++) {
            const SALong = -98.4936;
            const SALat = 29.4241;
            $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=> {
                const time = new Date();
                $(".weather").html(`
        <div class="singleCard">
        <div class="row"><h3>${daysOfWeek[time.getDay()]}</h3></div>
        <div class="row">${dateFromTimeStamp(data.dt)}</div>
        <div class="row">Temp: ${data.main.temp}°F</div>
        <div class="row">${data.main.temp_min}°F / ${data.main.temp_max}°F</div>
        <div class="row">Wind: ${data.wind.speed}</div>
        <div class="row">Humiditity: ${data.main.humidity}%</div>
        <div class="row">Air Pressure: ${data.main.pressure}</div>
        </div>
    `);
            });
        }
    } catch (error) {
        console.log(error)
    }
};

export const weatherForecast = async () => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${WEATHERMAP_API_KEY}`);
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
