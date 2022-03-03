
class Thermostat {
    constructor() {
        this.temperature = 20;
        this.psm = true;
    };

    getTemp() {
        return this.temperature;
    };

    up() {
        this.temperature++;
    };

    down() {
        if(this.temperature > 10) {
            this.temperature--;
        }; 
    };

    setPSM(value) {
        this.psm = value;
    };
};













module.exports = Thermostat;