const urlTemperature = 'https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=3f94adfb7d40842258b9c41075faf585&units=metric';


async function getTemperature (){  
    const resp = await fetch(urlTemperature);
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
      '6am'
    ];
    
    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Temperature / ° C',
        backgroundColor:[
          'rgb(116, 174, 29)',
        ], 
        data: [ 
        data.list[0].main.temp, 
        data.list[1].main.temp,
        data.list[2].main.temp, 
        data.list[3].main.temp,
        data.list[4].main.temp, 
        data.list[5].main.temp,
        data.list[6].main.temp,
        data.list[7].main.temp,
        data.list[8].main.temp,
      ]

      }]
    };
    
    const config = {
      type: 'line',
      data: chartData,
      options: {}
    };
    
    const myChart = new Chart(
      document.getElementById('myChartTemperature'),
      config
    );
};

getTemperature ();
