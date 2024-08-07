const lastUpdated = document.getElementById("modified");
const Year = document.getElementById("year");
const modeButton = document.getElementById("mode");
const body = document.getElementById("body");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const d = new Date();
const display = document.getElementById("print");

let presentYear = d.getFullYear();
const section = document.getElementsByTagName("section");
const companyUrl = "https://marisabeltrejo.github.io/wdd230/chamber/data/member-spotlight.json"


let LastModif = new Date(document.lastModified);

lastUpdated.textContent = LastModif;

Year.textContent += presentYear;

const navigation = document.getElementById("nav");
const hamButton = document.getElementById('menu');

hamButton.addEventListener('click', () => {
    console.log("working")
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

modeButton.addEventListener('click', function () {


    body.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark')
    section.classList.toggle('dark')


})

// api call for Garden City Kansas
async function curentWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=37.9717&lon=-100.8727&appid=2182407fe8adf3fe7aed195903bf92aa")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // convert kelvin to fahrenheit and display
            let kelvinTemp = data.main.temp;
            let fTemp = (kelvinTemp - 273.15) * 1.8 + 32;
            document.getElementById("temp").textContent = `Tempature: ${fTemp.toFixed(1)} °F`;

            // windspeed display
            let windSpeed = data.wind.speed;
            document.getElementById("wind-speed").textContent = `Wind speed: ${windSpeed} mph`

            // forcast
            document.getElementById("forcast").textContent = `Forcast: ${data.weather[0].description}`

            // icon
            let icon = data.weather[0].icon;
            let url = `https://openweathermap.org/img/w/${icon}.png`;

            // document.getElementById("icon").setAttribute("src", url);



            // Wind chill calulate and display
            if (fTemp <= 50 && windSpeed > 3) {
                let windChill = 35.74 + (0.6215 * fTemp) - 35.75 * (windSpeed ** 0.16) + (0.4275 * fTemp) * (windSpeed ** 0.16);
                document.getElementById("wind-chill").textContent = ` With Wind Chill: ${windChill.toFixed(1)} °F`

            }

        })
}
curentWeather()
// Function to fetch 3-day forecast
async function fetchWeatherForecast() {
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.9717&lon=-100.8727&appid=2182407fe8adf3fe7aed195903bf92aa";

    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        // Extract relevant data for each day (typically forecasts for 3 days are in the list)
        const forecasts = data.list;

        // Display forecast for each day
        for (let i = 0; i < 3; i++) {
            const forecast = forecasts[i];

            // Date
            const date = new Date(forecast.dt * 1000);
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

            // Temperature (convert from Kelvin to Fahrenheit)
            const tempKelvin = forecast.main.temp;
            const tempFahrenheit = (tempKelvin - 273.15) * 1.8 + 32;

            // Weather description and icon
            const description = forecast.weather[0].description;
            const icon = forecast.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

            // Display forecast information for each day
            const forecastElement = document.getElementById(`day${i + 1}`);
            forecastElement.innerHTML = `
                <h2>${dayOfWeek}</h2>
                <img src="${iconUrl}" alt="${description}">
                <p>Temperature: ${tempFahrenheit.toFixed(1)} °F</p>
                <p>Forecast: ${description}</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

// Call the function to fetch and display the 3-day forecast
fetchWeatherForecast();

const meet = document.getElementById("meet");
const exit = document.getElementById("exit");
const date = new Date;
let currentDate = date.getDay();

if (currentDate == 1 || currentDate == 2 || currentDate == 3) {
    meet.style.display = "block";

}

exit.addEventListener("click", () => {
    meet.style.display = "none";
})


fetch(companyUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.buisness.forEach((repo) => {
            console.log(2)
            let section = `<div class="medium2 large2">
                <h2 class="heading">${repo.name}</h2>
                <div>
                    <img class="bussimage" src="images/${repo.image}">
                    <p>***${repo.membership}***</p>
                    <p>____________________________________________________________</p>
                </div>
            </div>`
            display.innerHTML += section;
        });
    })