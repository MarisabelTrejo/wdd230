
const apiKey = '2182407fe8adf3fe7aed195903bf92aa';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.6328&lon=-87.0914&units=metric&appid=${apiKey}`;
const messageEl = document.getElementById('message');
const closeBtn = document.getElementById('close-btn');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tempMax = Math.round(data.main.temp_max);
        messageEl.textContent = `Today's high temperature: ${tempMax}°C`;
    })
    .catch(error => console.error(error));

closeBtn.addEventListener('click', () => {
    const alertEl = document.getElementById('temperature-alert');
    alertEl.style.display = 'none';
});