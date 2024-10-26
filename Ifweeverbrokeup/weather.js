
const API_KEY = "Your APi KEy";
const COORDS = 'coords';


const wea = document.querySelector('.temperature');
const plece = document.querySelector('.Location');
const wd = document.querySelector('.wd');
const ic = document.querySelector('.ic');


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
            const hum = json.main.humidity;
            const wind2 = json.wind.deg
            const high = json.main.temp_max;
            const low = json.main.temp_min;
            const wi = json.weather[0].description
            const weatherIcon = json.weather[0].icon;
            const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            $('#seo').text(place)
            $('#something').attr('placeholder',place);
            $('#shit').text(temperature+"°");
            $('#seo1').text(wind1+"ms/"+wind2+"°")
            $('#wed').text(wi)
            $('#location').text(place);
            $('#temperature').text(temperature+"°");
            $('#description').text(wi);
            $('#wind').text(wind1+"ms/"+wind2+"°")
            $('#humidity').text(hum+"%")
            $('#temp_max').text(high+"°");
            $('#temp_min').text(low+"°");
             /**
            wd.innerText = `
       ${wi}`**/
            ic.setAttribute('src', weatherIconAdrs);
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
