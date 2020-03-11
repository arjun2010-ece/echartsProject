import React from 'react';
import ReactEchartsCore from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/map';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


export const WorldMap = () => {
let geoCoordMap = {
    "Amsterdam": [4.895168,52.370216],
    "Athens": [-83.357567,33.951935],
    "Auckland": [174.763332,-36.84846],
    "Bangkok": [100.501765,13.756331],
    "Barcelona": [2.173403,41.385064],
    "Beijing": [116.407395,39.904211],
    "Berlin": [13.404954,52.520007],    
};
let rawData = [
  ["Amsterdam",101.6,90.1,77.1,69.1,78.3,69.4,1755,24,15,7,9,44,720,1.651,1.59,2.205,0.974,0.93,2.477,67.4,364,690,1113,4960,3.19,30.05,16.34,24000,689,1.8,50,200,390,690,1040,2331,1580,17.5,25.5,30,48400,39200,26300,30200,55400,39800,104400,58700,64600,49200,40300,31100,40300,27700,66700,66700  ],
  ["Athens",62.6,60.5,66.2,58.2,41.4,40,1822,22,29,13,25,86,590,3.314,2.991,4.236,1.349,4.701,3.1,56.8,390,580,880,4620,1.81,13.81,5.5,24900,389,2.02,54,100,210,630,1110,1489,647,10.1,13.5,24,26200,23300,18500,17100,24500,24200,57200,44000,34100,30700,21000,17700,15400,16300,34400,34400  ],
  ["Auckland",77.9,82.9,76.7,67.8,59.8,63.5,1852,20,15,16,7,51,580,3.362,2.377,3.959,2.116,2.303,4.027,66.1,496,630,1023,4450,2.57,40.86,13.62,23900,226,1.33,45,190,280,560,670,1644,1333,16,19.5,17,35700,31500,36500,28500,41800,31100,61300,55000,56300,37300,33400,26900,27200,27500,64900,64900  ],
  ["Bangkok",26.4,31.4,55.4,48.2,14.6,17.4,2312,7,36,25,20,165,550,4.637,2.242,5.468,-0.845,3.272,3.807,47,422,440,414,4370,0.75,3.47,2.47,29600,103,1,56,90,320,400,600,1463,932,4.4,4.8,5,8300,8400,11100,3000,10900,10900,32200,22400,24600,14500,7800,6000,5800,6500,19400,19400  ],
  ["Barcelona",79.7,78.6,74.7,65.6,59.6,58.7,1760,29,18,11,6,52,740,3.563,2.844,4.13,-0.238,2.043,3.052,64,393,750,984,5000,2.59,41.96,10.36,26900,177,1.77,51,170,330,580,1110,1269,1087,14.8,19.4,23,41300,34100,29100,29800,31500,32100,40800,67000,43100,38900,28900,25500,25000,28000,58300,58300  ],
  ["Beijing",28.2,29.9,60.3,51.8,17,18,1979,9,34,27,16,184,730,1.467,4.767,5.852,-0.683,3.325,5.417,50.6,463,420,310,4370,0.26,14.25,3.64,23800,67,1.24,41,160,400,660,700,1554,660,4.5,5.6,17,11400,7000,8500,7600,6200,11900,13300,11700,10700,18300,17100,8900,5400,7600,19800,19800  ],
  ["Berlin",109.7,97.1,72.2,64.1,79.2,70.1,1742,28,16,11,9,56,720,1.784,2.276,2.754,0.234,1.15,2.483,62.5,389,530,841,4670,2.98,80.3,10.79,35600,246,2.1,34,120,230,570,710,2395,1178,17.7,25.8,30,56900,38600,35500,28500,47400,57600,84200,74500,72100,51700,38100,28200,32000,28100,81700,81700  ],
];



function makeMapData(rawData) {
    let mapData = [];
    for (var i = 0; i < rawData.length; i++) {
        var geoCoord = geoCoordMap[rawData[i][0]];
        if (geoCoord) {
            mapData.push({
                name: rawData[i][0],
                value: geoCoord.concat(rawData[i].slice(1))
            });
        }
    }
    return mapData;
};



const getOption = () => ({
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
        offset: 0,
        color: '#4b5769'
    }, {
        offset: 1,
        color: '#A8A8A8'
    }]),
    title: {
        text: 'Prices and Earnings 2012',
        subtext: 'data from macrofocus',
        left: 'center',
        top: 5,
        itemGap: 0,
        textStyle: {
            color: '#eee'
        },
        z: 200
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show: true,
        left: 'right',
        iconStyle: {
            normal: {
                borderColor: '#ddd'
            }
        },
        feature: {
        },
        z: 202
    },
    brush: {
        geoIndex: 0,
        brushLink: 'all',
        inBrush: {
            opacity: 1,
            symbolSize: 14
        },
        outOfBrush: {
            color: '#000',
            opacity: 0.2
        },
        z: 10
    },
    geo: {
        map: 'world',
        silent: true,
        emphasis: {
            label: {
                show: true,
                areaColor: '#eee'
            }
        },
        itemStyle: {
            borderWidth: 0.2,
            borderColor: '#40ff00'
        },
        left: '6%',
        top: '10%',
        bottom: '14%',
        right: '14%',
        roam: true
    },
    grid: [{
        show: true,
        left: 0,
        right: 0,
        top: '100%',
        bottom: 0,
        borderColor: 'transparent',
        backgroundColor: '#996666',
        z: 99
    }],
    series: [
        {
            name: 'Prices and Earnings 2012',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 20, // size of dots on maps
            data: makeMapData(rawData),
            activeOpacity: 1,
            label: {
                formatter: '{b}',
                position: 'left',
                show: true
            },
            itemStyle: {
                borderColor: '#fff',
                color: '#ffff00',
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        }
    ]
});

    return (
        <div>
            <ReactEchartsCore option={getOption()} style={{ height: 600, width: 900, margin: '0 auto' }} />
        </div>
    )
}
