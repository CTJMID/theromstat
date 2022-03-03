
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

    it("If PSM is on, Max Temp is 25 degrees", () => {
        const thermostat = new Thermostat;
        for(i = 0; i < 6; i++){ 
            thermostat.up();
        };
        expect(thermostat.getTemp()).toEqual(25);
    });

    it("If PSM is off, Max Temp is 32 degrees", () => {
        const thermostat = new Thermostat;
        thermostat.setPSM(false);
        for(i = 0; i < 13; i++){ 
            thermostat.up();
        };
        expect(thermostat.getTemp()).toEqual(32);
    });

    it("Resets the temperature to 20", () => {
        const thermostat = new Thermostat;
        for(i = 0; i < 5; i++){ 
            thermostat.up();
        };
        thermostat.reset();
        expect(thermostat.getTemp()).toEqual(20);
    });

    describe("Current energy usage", () => {      
        it("returns 'medium-usage' when between 18-25", () => {
            const thermostat = new Thermostat;
            expect(thermostat.energyUsage()).toEqual('medium-usage');
        });

        it("returns 'low-usage' when below 18", () => {
            const thermostat = new Thermostat;
            for(i = 0; i < 5; i++){ 
                thermostat.down();
            };
            expect(thermostat.energyUsage()).toEqual('low-usage');
        });

        it("returns 'high-usage' when over 25", () => {
            const thermostat = new Thermostat;
            thermostat.setPSM(false);
            for(i = 0; i < 10; i++){ 
                thermostat.up();
            };
            expect(thermostat.energyUsage()).toEqual('high-usage');
        });
    });
});