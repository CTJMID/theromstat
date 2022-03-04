// const got = require('got');

// const handleReceivedResponse = (response) => {
//   console.log(JSON.parse(response.body));
// }

// got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);



// got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
//   console.log(response);
// });

// const fetchRepoInfo = (repoName) => {
//     got(`https://api.github.com/repos/${repoName}`).then((response) => {
//       console.log(response);
//     });
//   }


// const fetchRepoInfo = (repoName, secondaryMethod ) => {
//     got(`https://api.github.com/repos/${repoName}`).then((response) => {
//       // send back the response to fetchRepoInfo's caller
//       secondaryMethod(response);
//     });
//   }
  
//   fetchRepoInfo('sinatra/sinatra', particularMethode ); // we want to get back the response here

// const getWeather = (api) => {
//     got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${api}`).then((response) => {
//         console.log(JSON.parse(response.body));
//     });
// };

// getWeather('6abfab1148bb1dca8faaf5deaabadf2f')

const got = require('got');
const apiKey = '6abfab1148bb1dca8faaf5deaabadf2f'; // paste your API key here
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log('Requesting weather data');