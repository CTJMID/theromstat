const WeatherApi = require('./weatherApi')

class Thermostat {
    constructor(weather) {
        this.temperature = 20;
        this.psm = true;
        this.max = 25;
        this.weather = weather
    };

    getTemp() {
        return this.temperature;
    };

    up() {
        if(this.temperature < this.max) {
            this.temperature++;
        };
    };

    down() {
        if(this.temperature > 10) {
            this.temperature--;
        }; 
    };

    setPSM(value) {
        if(value === true){
            this.max = 25;
        } else {
            this.max = 32;
        }
        this.psm = value;
    };

    reset() {
        this.temperature = 20;
    }

    energyUsage() {
        if(this.temperature < 18) {
            return 'low-usage';
        } else if(this.temperature > 25) {
            return 'high-usage';
        } else {
            return 'medium-usage';
        };
    };

    setCity(city) {
    this.weather.fetchWeatherData(city, (settemp) => {
        this.temperature = settemp.main.temp
    })
    }
};

module.exports = Thermostat;