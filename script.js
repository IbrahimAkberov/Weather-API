const apiKey = '28d19d3afa1fe8f59cf5031b0b527a30';

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                document.getElementById('description').textContent = data.weather[0].description;
            } else {
                document.getElementById('cityName').textContent = 'City not found';
                document.getElementById('temperature').textContent = '';
                document.getElementById('description').textContent = '';
            }

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('cityName').textContent = 'Error fetching data';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = '';
        });
       
}