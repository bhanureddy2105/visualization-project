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
        name: 'Total Accidents from',
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
        data: [
            {
                value: 93509,
                name: 'New York'
            },
            {
                value: 126916,
                name: 'Texas'
            },
            {
                value: 377986,
                name: 'Florida'
            },
            {
                value: 727046,
                name: 'California'
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
        data: ['2018', '2019', '2020', '2021']
        // [34536, 13064, 6505, 10085]
        // [107841, 9855, 6752, 6653]
        // [195831, 76672, 24048, 26573]
        // [388838, 278395, 56204, 83605]
    },
    series: [
        {
            name: 'New York',
            type: 'bar',
            data: [6505, 6752, 24048, 56204]
        },
        {
            name: 'Texas',
            type: 'bar',
            data: [10085, 6653, 26573, 83605]
        },
        {
            name: 'Florida',
            type: 'bar',
            data: [13064, 9855, 76672, 278395]
        },
        {
            name: 'California',
            type: 'bar',
            data: [34536, 107841, 195831, 388838]
        },
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
            var data = [{
                    name: 'California',
                    value: 727046
                },
                {
                    name: 'Florida',
                    value: 377986
                },
                {
                    name: 'New York',
                    value: 93509
                },
                {
                    name: 'Texas',
                    value: 126916
                }
            ]
            option3 = {
                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2
                },
                visualMap: {
                    left: 'right',
                    min: 126916,
                    max: 727046,
                    inRange: {
                        color: [
                            '#abd9e9',
                            '#e0f3f8',
                            '#ffffbf',
                            '#fee090',
                            '#fdae61',
                            '#f46d43',
                            '#FF5C5C'
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
                    name: 'Accident count',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data
                }]
            };
            data.sort(function (a, b) {
                return a.value - b.value;
            });
            const mapOption = {
                visualMap: {
                    left: 'right',
                    min: 126916,
                    max: 727046,
                    inRange: {
                        // prettier-ignore
                        color: ['#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#FF5C5C']
                    },
                    text: ['High', 'Low'],
                    calculable: true
                },
                series: [{
                    id: 'population',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    animationDurationUpdate: 1000,
                    universalTransition: true,
                    data: data
                }]
            };
            const barOption = {
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    axisLabel: {
                        rotate: 30
                    },
                    data: data.map(function (item) {
                        return item.name;
                    })
                },
                animationDurationUpdate: 1000,
                series: {
                    type: 'bar',
                    id: 'population',
                    data: data.map(function (item) {
                        return item.value;
                    }),
                    universalTransition: true
                }
            };
            let currentOption = mapOption;
            myChart3.setOption(option3);
            setInterval(function () {
                currentOption = currentOption === mapOption ? barOption : mapOption;
                myChart3.setOption(currentOption, true);
            }, 5000);
        });

    });

option3 && myChart3.setOption(option3);


var chartDom4 = document.getElementById('main4');
var myChart4 = echarts.init(chartDom4);
var option4;

// prettier-ignore
const hours = [
    '12am', '1am', '2am', '3am', '4am', '5am', '6am',
    '7am', '8am', '9am', '10am', '11am',
    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
];
// prettier-ignore
const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];
// prettier-ignore
const data = [
        [0, 0, 5387],
        [0, 1, 4882],
        [0, 2, 4965],
        [0, 3, 4088],
        [0, 4, 3409],
        [0, 5, 3338],
        [0, 6, 3321],
        [0, 7, 3411],
        [0, 8, 3305],
        [0, 9, 3732],
        [0, 10, 4961],
        [0, 11, 5365],
        [0, 12, 6444],
        [0, 13, 6676],
        [0, 14, 7047],
        [0, 15, 6998],
        [0, 16, 6805],
        [0, 17, 7181],
        [0, 18, 6787],
        [0, 19, 6356],
        [0, 20, 6008],
        [0, 21, 5753],
        [0, 22, 5074],
        [0, 23, 4282],
        [1, 0, 3760],
        [1, 1, 3099],
        [1, 2, 3132],
        [1, 3, 3145],
        [1, 4, 3595],
        [1, 5, 6567],
        [1, 6, 8802],
        [1, 7, 9494],
        [1, 8, 8868],
        [1, 9, 6775],
        [1, 10, 6342],
        [1, 11, 7264],
        [1, 12, 10089],
        [1, 13, 12025],
        [1, 14, 14310],
        [1, 15, 15861],
        [1, 16, 15659],
        [1, 17, 15497],
        [1, 18, 10867],
        [1, 19, 7265],
        [1, 20, 5864],
        [1, 21, 5405],
        [1, 22, 4765],
        [1, 23, 4477],
        [2, 0, 4112],
        [2, 1, 3546],
        [2, 2, 3112],
        [2, 3, 2741],
        [2, 4, 3552],
        [2, 5, 6632],
        [2, 6, 9155],
        [2, 7, 10546],
        [2, 8, 9775],
        [2, 9, 7529],
        [2, 10, 6658],
        [2, 11, 6786],
        [2, 12, 9808],
        [2, 13, 12619],
        [2, 14, 14512],
        [2, 15, 16665],
        [2, 16, 17210],
        [2, 17, 17407],
        [2, 18, 12414],
        [2, 19, 7285],
        [2, 20, 5769],
        [2, 21, 5303],
        [2, 22, 4970],
        [2, 23, 4718],
        [3, 0, 4277],
        [3, 1, 3897],
        [3, 2, 3324],
        [3, 3, 2926],
        [3, 4, 3751],
        [3, 5, 6626],
        [3, 6, 8500],
        [3, 7, 10354],
        [3, 8, 9668],
        [3, 9, 7581],
        [3, 10, 6649],
        [3, 11, 7129],
        [3, 12, 10367],
        [3, 13, 13251],
        [3, 14, 14919],
        [3, 15, 16729],
        [3, 16, 17118],
        [3, 17, 17933],
        [3, 18, 12560],
        [3, 19, 7872],
        [3, 20, 6201],
        [3, 21, 5673],
        [3, 22, 5416],
        [3, 23, 4950],
        [4, 0, 4435],
        [4, 1, 4096],
        [4, 2, 3574],
        [4, 3, 3250],
        [4, 4, 3791],
        [4, 5, 6886],
        [4, 6, 8367],
        [4, 7, 10255],
        [4, 8, 9414],
        [4, 9, 7374],
        [4, 10, 7080],
        [4, 11, 7776],
        [4, 12, 10547],
        [4, 13, 13503],
        [4, 14, 15765],
        [4, 15, 17302],
        [4, 16, 17050],
        [4, 17, 17597],
        [4, 18, 12348],
        [4, 19, 7925],
        [4, 20, 6363],
        [4, 21, 6393],
        [4, 22, 5558],
        [4, 23, 5064],
        [5, 0, 4573],
        [5, 1, 4122],
        [5, 2, 3635],
        [5, 3, 3662],
        [5, 4, 4611],
        [5, 5, 7003],
        [5, 6, 8481],
        [5, 7, 9070],
        [5, 8, 8754],
        [5, 9, 7614],
        [5, 10, 7408],
        [5, 11, 9225],
        [5, 12, 12634],
        [5, 13, 14703],
        [5, 14, 17089],
        [5, 15, 19392],
        [5, 16, 18298],
        [5, 17, 17721],
        [5, 18, 13994],
        [5, 19, 9958],
        [5, 20, 7420],
        [5, 21, 7034],
        [5, 22, 6615],
        [5, 23, 6186],
        [6, 0, 5512],
        [6, 1, 5218],
        [6, 2, 5423],
        [6, 3, 4043],
        [6, 4, 3463],
        [6, 5, 3678],
        [6, 6, 4060],
        [6, 7, 4034],
        [6, 8, 4313],
        [6, 9, 5245],
        [6, 10, 6312],
        [6, 11, 7073],
        [6, 12, 8643],
        [6, 13, 9589],
        [6, 14, 10200],
        [6, 15, 9680],
        [6, 16, 8961],
        [6, 17, 8957],
        [6, 18, 8404],
        [6, 19, 7327],
        [6, 20, 6789],
        [6, 21, 6618],
        [6, 22, 6287],
        [6, 23, 5716]
    ]
    .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
option4 = {
    title: {
        text: "HeatMap of accidents wrt weekdays and hours"
    },
    tooltip: {
        position: 'top'
    },
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 20000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        inRange: {
            // prettier-ignore
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    series: [{
        name: 'Accident Count',
        type: 'heatmap',
        data: data,
        label: {
            show: false
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

option4 && myChart4.setOption(option4);