import React from 'react';
import ReactEcharts from 'echarts-for-react';


export const Sample = () => {
    return (
        <div style={{marginTop: "20px"}}>
            <h2>Sample chart components</h2>
            <ReactEcharts
                option={{
                legends: {},
                grid: {
                    left: 130,
                    right: "30%",
                    height: "60%",
                    bottom:"60"
                },
                itemStyle: {
                    color: "green"
                },
                emphasis: {
                    itemStyle: {
                        color: 'blue'
                    },
                    label: {
                        show: true,
                        // Text in emphasis.
                        formatter: 'This is a emphasis label1.'
                    }
                },
                label: {
                    show: false,
                    formatter: 'This is a normal label.'
                },
                title: {
                    text: 'ECharts entry example',
                    textStyle: { color: "red", textAlign: "right"}
                },
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value"
                },
                series: [{ 
                    type: "bar",
                    name: "legend1",
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
            }}
        />
        </div>
    )
}
