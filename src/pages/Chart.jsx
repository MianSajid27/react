// import React from 'react'
// import Chart from "chart.js/auto";
// import { Line } from "react-chartjs-2";

// const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };
// const Chart = () => {
//   return (
//     <div>
//       <div>
//       <Line data={data} />
//     </div>
//     </div>
//   )
// }

// export default Chart
// import React from "react";
// import Chart from "chart.js/auto";
// import { Line } from "react-chartjs-2";

// const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//     //   backgroundColor: "rgb(255, 99, 132)",
//     //   borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

// const LineChart = () => {
//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// };

// // export default LineChart;
// import React from "react";
// import Chart from "chart.js/auto";
// import { Bar } from "react-chartjs-2";

// const BarChart = () => {
//   const labels = ["January", "February", "March", "April", "May", "June"];
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         // label: "My First dataset",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   };
//   return (
//     <div>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default BarChart;
import React, { Component } from "react";
import Chart from "react-apexcharts";
import "../App.css"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "sunday"]
        },
        colors: ['#000000']
      },
      series : [
        {
           
          name: "series-1" ,
          
          data: [70, 30, 40, 30, 20, 10, 5]
  
         
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div  className="row">
          <div  className="">
            <Chart 
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
      
            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;