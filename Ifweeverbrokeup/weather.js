
const API_KEY = "7ce9242fc61fc806b906c5b9538298fe";
const COORDS = 'coords';


const wea = document.querySelector('.temperature');
const plece = document.querySelector('.Location');
const wd = document.querySelector('.wd');



function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json)
            const temperature = json.main.temp;
            localStorage.setItem('temp',temperature);
            const place = json.name;
            const wind1 = json.wind.speed
            localStorage.setItem('wind2',wind1);
            const wind2 = json.wind.deg
            const wi = json.weather[0].description
            const weatherIcon = json.weather[0].icon;
            const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            $('#seo').text(place)
            $('#something').attr('placeholder',place);
            $('#shit').text(temperature+"°");
            $('#seo1').text(wind1+"ms/"+wind2+"°")
            $('#wed').text(wi)
             /**
            wd.innerText = `
       ${wi}`**/

            wd.setAttribute('src', weatherIconAdrs);
        })
        .catch((handleError) => console.log("error:", handleError));
}
function init() {
    askForCoords()
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

}


function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);


    console.log("location access success")


}

function handleError() {
    console.log(error)
}



init();