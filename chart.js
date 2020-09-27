let myChart = document.querySelector("#myChart").getContext('2d');

let massPopChart = new Chart(myChart, {
  type:'line',
  data:{
    labels:['01/22','01/23','01/24','01/25','01/26', '01/27'],
    datasets:[{
      label:'none',
      data:[
        200,
        190,
        180,
        180,
        190,
        198
      ],
      //backgroundColor:'green',
      backgroundColor:[
        // 'rgba(255, 99, 132, 0.6)',
        // 'rgba(54, 162, 235, 0.6)',
        // 'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',  
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    responsive: true,
    title:{
      display:true,
      text:'Track your Weigth',
      fontSize:25
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
      }],
      yAxes: [{
        display: true,
        //type: 'logarithmic',
        scaleLabel: {
            display: true,
            labelString: 'Weigth'
          },
          ticks: {
            // suggestedMin: 100,
            // suggestedMax: 240,
            // min: 50,
            // max: 250,
            stepSize: 3,
            // maxTicksLimit:7
          }
      }]
    },
    // legend:{
    //   display:true,
    //   position:'right',
    //   labels:{
    //     fontColor:'#000'
    //   }
    // },
    // layout:{
    //   padding:{
    //     left:100,
    //     right:100,
    //     bottom:100,
    //     top:0
    //   }
    // },
    
  }
});









// var config = {
//   type: 'line',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'APAC RE Index',
//       backgroundColor: window.chartColors.red,
//       borderColor: window.chartColors.red,
//       fill: false,
//       data: [
//         10,
//         20,
//         30,
//         40,
//         100,
//         50,
//         150
//         /*randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor()*/
//       ],
//     }, {
//       label: 'APAC PME',
//       backgroundColor: window.chartColors.blue,
//       borderColor: window.chartColors.blue,
//       fill: false,
//       data: [
//         50,
//         300,
//         100,
//         450,
//         150,
//         200,
//         300
//       ],
  
//     }]
//   },
//   options: {
//     responsive: true,
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart - Logarithmic'
//     },


    // scales: {
    //   xAxes: [{
    //     display: true,
    //     scaleLabel: {
    //       display: true,
    //       labelString: 'Date'
    //     },
    //   }],

    //   yAxes: [{
    //     display: true,
    //     //type: 'logarithmic',
    //     scaleLabel: {
    //         display: true,
    //         labelString: 'Index Returns'
    //       },
    //       ticks: {
    //         min: 0,
    //         max: 500,

    //         // forces step size to be 5 units
    //         stepSize: 100
    //       }
    //   }]
    // }


//   }
// };

// window.onload = function() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   window.myLine = new Chart(ctx, config);
// };

// document.getElementById('randomizeData').addEventListener('click', function() {
//   config.data.datasets.forEach(function(dataset) {
//     dataset.data = dataset.data.map(function() {
//       return randomScalingFactor();
//     });

//   });

//   window.myLine.update();
// });