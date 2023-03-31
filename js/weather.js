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
        const SALong = -98.4936;
        const SALat = 29.4241;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`)
        console.log(response.json())
    } catch (error) {
        console.log(error);
    }
}




/** EVENT LISTENERS **/
// document.getElementById('setMarkerButton').addEventListener('click', event => {
//     // prevents form from submitting by clicking button, and resets its function
//     event.preventDefault();
//     // map.setZoom(document.getElementById('setMarker').value);
//
//     const address = document.getElementById('setMarker').value;
//     console.log(address);
//     // geocode sets coordinates, .then stashes the coordinates as 'coords'
//     geocode(address, MAPBOX_EXERCISE_TOKEN).then(coords=> {
//         const newMarker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
//         // this centers the map on the input coords
//         map.setCenter(coords);
//
// });

document.getElementById('setMarkerButton').addEventListener('click', event => {
    event.preventDefault();

    const address = document.getElementById('setMarker').value;
    console.log(address);

})
