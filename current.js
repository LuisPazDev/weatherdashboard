const currenTemp = document.getElementById('currenTemp');
const currentWeather = document.getElementById('currentWeather');
const currentWind = document.getElementById('currentWind');
const currentHumidty = document.getElementById('currentHumidity');

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=3f94adfb7d40842258b9c41075faf585&units=metric';

async function getCurrentWeather (){  
  const resp = await fetch(urlCurrent);
  const data = await resp.json();

  console.log(data);

  const temp = data.main.temp;
  console.log(temp);
  currenTemp.innerHTML= temp + ' ° C';

  const weather = data.weather[0].main;
  console.log(weather);
  currentWeather.innerHTML= weather;

  const wind = data.wind.speed;
  console.log(wind);
  currentWind.innerHTML= wind + ' mph';

  const humidity = data.main.humidity;
  console.log(humidity);
  currentHumidty.innerHTML= humidity +  ' %';

};

getCurrentWeather();

