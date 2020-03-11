import React from 'react';
import ReactEcharts from 'echarts-for-react';


export const Funnel = (props) => {
    const getOption = () => ({
        title: {
            text: 'Funnel chart',
            subtext: 'Funnel description if needed'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['dataA','dataB','dataC','dataD','dataE']
        },
    
        series: [
            {
                name:'Funnel',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '30%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 80,
                minSize: '0%',
                maxSize: '80%',
                sort: 'descending',
                gap: 12,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    {value: 60, name: 'dataA'},
                    {value: 40, name: 'dataB'},
                    {value: 20, name: 'dataC'},
                    {value: 80, name: 'dataD'},
                    {value: 400, name: 'dataE'}
                ]
            }
        ]
    });
    
    return (
        <div>
            <ReactEcharts option={getOption()} style={{ height: 500 }} />
        </div>
    )
}
