const urlWind = 'https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=3f94adfb7d40842258b9c41075faf585&units=metric';


async function getWind (){  
    const resp = await fetch(urlWind);
    const data = await resp.json();

    console.log(data.list);



const labels = [
  '3am',
  '6am',
  '9am',
  '12pm',
  '3pm',
  '6pm',
  '9pm',
  '12pm',
  '3am',
];

const chartData = {
  labels: labels,
  datasets: [{
    label: 'Wind / Speed',
    backgroundColor:[
      '#5cb4f7',
      '#65a8eb',
      '#58a6f5',
      '#479df5',
      '#3391f2',
      '#1b85f2',
      '#0880fc',
      '#025fbf',
      '#5cb4f7',
    ], 
    borderColor: '#0a0a09',
    data: [ 
    data.list[0].wind.speed, 
    data.list[1].wind.speed,
    data.list[2].wind.speed, 
    data.list[3].wind.speed,
    data.list[4].wind.speed, 
    data.list[5].wind.speed,
    data.list[6].wind.speed,
    data.list[7].wind.speed,
    data.list[8].wind.speed,
  ]
  }]
};

const config = {
  type: 'bar',
  data: chartData,
  options: {
  }
};

const myChart = new Chart(
  document.getElementById('myChartWind'),
  config
);
};


getWind ();