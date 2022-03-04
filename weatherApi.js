const got = require('got');

class WeatherApi {

    fetchWeatherData(city, callback) {
        const apiKey = {API};
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

        

        got(apiUrl).then((response) => {
            const weatherData = JSON.parse(response.body);
            return callback(weatherData);
        });
    };
};
    
module.exports = WeatherApi;


// got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
//   const responseObject = JSON.parse(response.body);
//   console.log(responseObject);
// });
