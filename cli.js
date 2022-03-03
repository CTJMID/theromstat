const Thermostat = require('./thermostat');

const thermostat = new Thermostat;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


(function loop() {
    rl.question('Enter Command > ', (input) => {
        switch(input) {
            case 'up':
                thermostat.up();
                console.log(`The temperature is ${thermostat.getTemp()}`);
                break;
            case 'down':
                thermostat.down();
                console.log(`The temperature is ${thermostat.getTemp()}`);
        }  
    });
});



