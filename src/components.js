const text = (elem, text, className) => {
    let t = document.createElement(`${elem}`);
    t.textContent = `${text}`;
    t.classList.add(`${className}`);
    return t;
};

const getData = (place) => {
    let weather={};
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&lang=en&appid=96234945f21abe7a841c8fc0306c59be`)
        .then(function(response) { 
            response.json()
            .then(function (data) {
                weather.country =  data.name
                weather.sky =  data.weather[0].description
                weather.icon =  data.weather[0].icon
                weather.windSpeed =  data.wind.speed
                weather.windDirection =  data.wind.deg
                weather.maxTemp =  data.main.temp_max
                weather.minTemp =  data.main.temp_min
            })
        })
        .catch(function(err) {
            return err
        });
    return weather
}

export { text, getData };