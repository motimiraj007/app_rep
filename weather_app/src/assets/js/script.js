let weather = {
    "apikey": "525d2fda3a4c0b8ad9161f0418dc8d19",
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apikey
        ).then(res => res.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.humidity').innerHTML = '<span class="humidity">' + humidity + '%</span>'
        document.querySelector('.wind').innerText = 'Wind speed: ' + speed + 'km/h';
    },
    search: function () {
        let city = document.querySelector('input[name="search"]').value;
        this.fetchWeather(city);
    }
};

document.querySelector('.search button').addEventListener('click', () => weather.search());
document.querySelector('.search input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        weather.search();
    }
});
window.onload = () => weather.fetchWeather('kabul');

