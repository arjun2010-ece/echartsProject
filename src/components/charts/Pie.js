import React from 'react';
import ReactEcharts from 'echarts-for-react';


export const Pie = (props) => {
    const getOption = () => ({
        title: {
          text: "JS Front End Frameworks",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          top: "middle",
          right: "350px",
          data: ["React", "Angular", "Vue"]
        },
        series: [
          {
            name: "JS FrontEnd",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            label: {
              show: true,
              position: 'inside'
          },
            data: [
              {
                value: 50,
                name: "React"
              },
              {
                value: 22,
                name: "Angular"
              },
              {
                value: 28,
                name: "Vue"
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    return (
        <div>
            <ReactEcharts option={getOption()} style={{ height: 300 }} />
        </div>
    )
}
