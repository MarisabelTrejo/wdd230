// api call for south jordan
fetch("https://api.openweathermap.org/data/2.5/weather?lat=20.6328&lon=-87.0914&appid=2182407fe8adf3fe7aed195903bf92aa")
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

        document.getElementById("icon").setAttribute("src", url);

        // Calculate and display wind chill if applicable
        if (fTemp <= 50 && windSpeed > 3) {
            let windChill = 35.74 + (0.6215 * fTemp) - 35.75 * (windSpeed ** 0.16) + (0.4275 * fTemp) * (windSpeed ** 0.16);
            document.getElementById("wind-chill").textContent = `With Wind Chill: ${windChill.toFixed(1)} °F`;
        }

        // Display high temperature for the current day in a closeable message
        let tempMax = data.main.temp_max;
        let tempMaxF = (tempMax - 273.15) * 1.8 + 32;
        document.getElementById("temperature-alert").textContent = `High Temperature Today: ${tempMaxF.toFixed(1)} °F`;


    })