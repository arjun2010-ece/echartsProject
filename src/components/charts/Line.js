import React from 'react';
import ReactEcharts from 'echarts-for-react';


export const Line = (props) => {
    const getOption = () => ({
        title: {
            text: "Order Status",
            x: "70px"
          },
          grid: {
            left: "50%",
            height: "90%",
            bottom:"60"
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        legend: {
            orient: "vertical",
            icon:"circle",
            top: "800",
            right: "10px",
            data: ["Legend1", "Legend2"]
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                name: "Legend1",
                title: {
                    text: "Line1 title",
                    x: "10px"
                  },
            },
            {
                data: [120, 232, 401, 134, 1290, 330, 220],
                type: 'line',
                name: "Legend2",
                title: {
                    text: "Line2 title",
                    x: "10px"
                  },
            },
        ]
      });
    return (
        <div>
            <ReactEcharts option={getOption()} style={{ height: 300, width: 900 }} />
        </div>
    )
}
