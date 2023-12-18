import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Piechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['A', 'B', 'C', 'D'],
        colors: ['#71dd37', '#c256fa', '#8592a3', '#03c3ec'],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '14px',
                  fontWeight: 600,
                  color: undefined,
                },
                value: {
                  show: true,
                  fontSize: '25px',
                  fontWeight: 700,
                  color: 'rgba(50, 71, 92, 0.87)',
                  offsetY: 16,
                },
                total: {
                  show: true,
                  label: 'Hours',
                  color: 'rgba(50, 71, 92, 0.38)',
                  fontSize: '18px',
                  fontWeight: 300,
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        legend: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
      series: [25, 35, 17, 23],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="100%" />
      </div>
    );
  }
}

export default Piechart;
