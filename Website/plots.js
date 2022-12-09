var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Circular Graph',
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        top: '8%',
        left: 'center'
    },
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
        },
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
                value: 727046,
                name: 'California'
            },
            {
                value: 377986,
                name: 'Florida'
            },
            {
                value: 126916,
                name: 'Texas'
            },
            {
                value: 93509,
                name: 'New York'
            },
        ]
    }]
};
option && myChart.setOption(option);


var chartDom1 = document.getElementById('main1');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
    title: {
        text: 'Bar graph'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['California', 'Florida', 'New York', 'Texas'].reverse()
    },
    series: [{
            name: '2018',
            type: 'bar',
            data: [34536, 13064, 6505, 10085].reverse()
        },
        {
            name: '2019',
            type: 'bar',
            data: [107841, 9855, 6752, 6653].reverse()
        },
        {
            name: '2020',
            type: 'bar',
            data: [195831, 76672, 24048, 26573].reverse()
        },
        {
            name: '2021',
            type: 'bar',
            data: [388838, 278395, 56204, 83605].reverse()
        }
    ]
};

option1 && myChart1.setOption(option1);


// var chartDom2 = document.getElementById('main2');
// var myChart2 = echarts.init(chartDom2);
// var option2;

// option2 = {
//     tooltip: {
//         trigger: 'axis'
//     },
//     legend: {
//         data: ['California', 'Florida', 'New York', 'Texas']
//     },
//     grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//     },
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//             name: 'California',
//             type: 'line',
//             stack: 'Total',
//             data: [76215, 103750, 108673, 110133, 113043, 124536, 90696]
//         },
//         {
//             name: 'Florida',
//             type: 'line',
//             stack: 'Total',
//             data: [27318, 56889, 60458, 63161, 63829, 67429, 38902]
//         },
//         {
//             name: 'New York',
//             type: 'line',
//             stack: 'Total',
//             data: [9327, 13828, 14842, 14996, 15082, 15310, 10124]
//         },
//         {
//             name: 'Texas',
//             type: 'line',
//             stack: 'Total',
//             data: [12715, 18460, 18851, 19381, 19759, 21927, 15823]
//         },
//     ]
// };

// option2 && myChart2.setOption(option2);







// myChart3.showLoading();
var chartDom3 = document.getElementById('main3');
var myChart3 = echarts.init(chartDom3);
var option3;

fetch('./map.json', {
        method: "GET",
        mode: "cors",
    })
    .then(function (response) {
        myChart3.hideLoading();
        response.json().then(function (usaJson) {
            console.log(usaJson)
            echarts.registerMap('USA', usaJson, {
                Alaska: {
                    left: -131,
                    top: 25,
                    width: 15
                },
                Hawaii: {
                    left: -110,
                    top: 28,
                    width: 5
                },
                'Puerto Rico': {
                    left: -76,
                    top: 26,
                    width: 2
                }
            });
            option3 = {
                title: {
                    text: 'USA Accident data (2018-21)',
                    left: 'right'
                },
                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2
                },
                visualMap: {
                    left: 'right',
                    min: 500000,
                    max: 38000000,
                    inRange: {
                        color: [
                            '#313695',
                            '#4575b4',
                            '#74add1',
                            '#abd9e9',
                            '#e0f3f8',
                            '#ffffbf',
                            '#fee090',
                            '#fdae61',
                            '#f46d43',
                            '#d73027',
                            '#a50026'
                        ]
                    },
                    text: ['High', 'Low'],
                    calculable: true
                },
                toolbox: {
                    show: true,
                    //orient: 'vertical',
                    left: 'left',
                    top: 'top',
                    feature: {
                        dataView: {
                            readOnly: false
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [{
                    name: 'USA PopEstimates',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [{
                            name: 'California',
                            value: 38041430
                        },
                        {
                            name: 'Florida',
                            value: 19317568
                        },
                        {
                            name: 'New York',
                            value: 19570261
                        },
                        {
                            name: 'Texas',
                            value: 26059203
                        }
                    ]
                }]
            };
            myChart3.setOption(option3);
        });

    });

option3 && myChart3.setOption(option3);