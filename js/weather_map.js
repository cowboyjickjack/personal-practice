import {currentWeather} from "./weather.js";

(async () => {

    let response = await currentWeather();
    return response;


// const query = searchInput.value // selects node
// /** EVENT LISTENERS **/
// document.getElementById('setMarkerButton').addEventListener('click', event => {
//     // prevents form from submitting by clicking button, and resets its function
//     event.preventDefault();
//     // map.setZoom(document.getElementById('setMarker').value);
//
//     const address = document.getElementById('setMarker').value;
//     console.log(address);
//     // geocode sets coordinates, .then stashes the coordinates as 'coords'
//     geocode(address, MAPBOX_EXERCISE_TOKEN).then(coords => {
//         const newMarker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
//         // this centers the map on the input coords
//         map.setCenter(coords);
//     });
//     let inputAddress = address;
//     // TODO: figure out how to use the saved input of the address and then get coordinates to then plug into the current weather api
// });
})();