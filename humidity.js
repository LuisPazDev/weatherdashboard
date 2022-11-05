const urlHumidity = 'https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=3f94adfb7d40842258b9c41075faf585&units=metric';


async function getHumidity (){  
    const resp = await fetch(urlHumidity);
    const data = await resp.json();

    console.log(data.list);

const labels = [  
  '6am',
  '9am',
  '12pm',
  '3pm',
  '6pm',
  '9pm',
  '12am',
  '3am',
  '6am',
];

const chartData = {
  labels: labels,
  datasets: [{
    label: 'Humidity',
    backgroundColor:[
      '#db824b',
      '#f27a30',
      '#db6e2a',
      '#d65f15',
      '#d1590f',
      '#f56811',
      '#fa6102',
    ], 
    borderColor: '#0a0a09',
    data: [ 
    data.list[0].main.humidity,
    data.list[1].main.humidity, 
    data.list[2].main.humidity,  
    data.list[3].main.humidity, 
    data.list[4].main.humidity, 
    data.list[5].main.humidity,
    data.list[6].main.humidity,
    data.list[5].main.humidity,
    data.list[6].main.humidity,
  ]
  }]
};

const config = {
  type: 'bar',
  data: chartData,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChartHumidity'),
  config
);
};

getHumidity ();
