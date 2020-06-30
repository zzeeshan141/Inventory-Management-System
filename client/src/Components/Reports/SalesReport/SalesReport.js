import React, {Component} from 'react';
import canvas, {Chart} from 'chart.js';

const graphData = [
        {
          label: "Apples",
          value: 10
        },
        {
            label: "Bananas",
            value: 20
          },
          {
            label: "Sttrawberrys",
            value: 30
          },
          {
            label: "Tomatos",
            value: 40
          },
          {
            label: "Lemon",
            value: 50
          },
        
    ]

class SalesReport extends Component {
    constructor(props){
        super(props);
        //this.state = graphData;
        this.chartRef = React.createRef();
    }

    componentDidMount(){
        this.myChart = new Chart(this.chartRef.current, {
            type: 'bar',
            data: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [{
                    label: 'Products Data',
                    data: [10, 20, 30, 40, 50],
                    backgroundColor: '#112233'
                }]
              }
          });
    }
  
  render(){

    return(
      <div className="sales-main-div">
        <canvas ref={this.chartRef}/>
      </div>
    );
  }
}

export default SalesReport;