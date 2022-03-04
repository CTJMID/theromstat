const Thermostat = require('./thermostat');

const thermostat = new Thermostat;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const cliprompt = () => {
    rl.question('Enter Command > ', (input) => {
        switch(input) {
            case('up'):
                thermostat.up(); 
                break;
            case('down'):
                thermostat.down();
                break;
            case('psm on'):
                thermostat.setPSM(true);
                break;
            case('psm off'):
                thermostat.setPSM(false);
        };
     console.log(`The temperature is ${thermostat.getTemp()}`);
     cliprompt() 
    });
};
cliprompt()



