// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=cf9981c182067b008a3e128a1273f1dd'

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        currentTemp.innerHTML = `${data.main.temp} F`;
        weatherIcon.setAttribute = ('src', `${data.weather[0].icon}.svg`);

    })
