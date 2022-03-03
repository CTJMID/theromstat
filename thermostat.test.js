
const { expect, it } = require('@jest/globals');
const { camelCase } = require('yargs-parser');
const Thermostat = require('./thermostat');

describe("Thermostat", () => {
    it("starts at 20 deg", () => {
        const thermostat = new Thermostat;
        expect(thermostat.getTemp()).toEqual(20);
    });

    it("increases the temp", () => {
        const thermostat = new Thermostat;
        thermostat.up();
        expect(thermostat.getTemp()).toEqual(21);
    });

    it("decreases the temp", () => {
        const thermostat = new Thermostat;
        thermostat.down();
        expect(thermostat.getTemp()).toEqual(19);
    });

    it("cant go below 10 degrees", () => {
        const thermostat = new Thermostat;
        // will try to descrease temp from 20 to 9
        for(i = 0; i < 11; i++){ 
            thermostat.down();
        };
        expect(thermostat.getTemp()).toEqual(10);
    });

    it("starts with PSM on", () => {
        const thermostat = new Thermostat;
        expect(thermostat.psm).toEqual(true);
    });

    it("turns PSM off", () => {
        const thermostat = new Thermostat;
        thermostat.setPSM(false);
        expect(thermostat.psm).toEqual(false);
    });
});