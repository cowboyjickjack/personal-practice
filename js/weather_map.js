(function () {

    const SALong = -98.4936;
    const SALat = 29.4241;

/** HTML LOOP FIVE TIMES **/
// const loopFiveTimes = input => {
//     let test = document.querySelector('#weather');
//     let htmlString = '';
//     for (let i = 1; i <= 5; i++) {
//         htmlString += `<div>Day ${i}</div>`
//     }
//     test.innerHTML = htmlString;
// };

/** GETTING THE CURRENT WEATHER DATA AND LOOPING 5 TIMES **/
for (let i = 1; i <= 5; i++) {
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


/** EVENT LISTENERS **/
document.getElementById('setMarkerButton').addEventListener('click', event => {
    // prevents form from submitting by clicking button, and resets its function
    event.preventDefault();
    // map.setZoom(document.getElementById('setMarker').value);

    const address = document.getElementById('setMarker').value;
    console.log(address);
    // geocode sets coordinates, .then stashes the coordinates as 'coords'
    geocode(address, MAPBOX_EXERCISE_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
        // this centers the map on the input coords
        map.setCenter(coords);
    });
    let inputAddress = address;
    // TODO: figure out how to use the saved input of the address and then get coordinates to then plug into the current weather api
});
})();