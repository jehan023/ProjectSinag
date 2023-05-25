import React, { useEffect, useState } from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Filler,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Filler,
    LineController,
    BarController,
    zoomPlugin
);

const BattLevelChart = (props) => {
    const sysData = props.data;
    const view = props.viewMode;

    const [label, setLabel] = useState([]);
    const [level, setLevel] = useState([]);
    const [lamp, setLamp] = useState([]);
    const [status, setStatus] = useState([]);

    const [maxlevel, setMaxLevel] = useState([]);
    const [minlevel, setMinLevel] = useState([]);

    useEffect(() => {
        try {
            setLabel([]);
            setLevel([]);
            setLamp([]);
            setStatus([]);

            setMaxLevel([]);
            setMinLevel([]);

            switch (view) {
                case 'day':
                    sysData.map(row => {
                        setLevel(prevList => [...prevList, row.batt_level]);
                        setLabel(prevList => [...prevList, row.time]);
                        setLamp(prevList => [...prevList, row.led_status]);
                        setStatus(prevList => [...prevList, row.charging]);
                    });

                    break;

                case 'month':
                    // const byMonthFilter = sysData.reduce((acc, item) => {
                    //     const existingItem = acc.find((el) => el.date === item.date);
                    //     if (existingItem) {
                    //         existingItem.level = Math.max(existingItem.level, parseFloat(item.batt_level));
                    //     } else {
                    //         acc.push({ date: item.date, level: item.batt_level });
                    //     }
                    //     return acc;
                    // }, []);

                    // byMonthFilter.map(row => {
                    //     setLevel(prevList => [...prevList, row.level]);
                    //     setLabel(prevList => [...prevList, row.date]);
                    // });

                    const byDayFilter = sysData.reduce((acc, item) => {
                        const existingItem = acc.find((el) => el.date === item.date);
                        if (existingItem) {
                            existingItem.maxLevel = Math.max(existingItem.maxLevel, parseFloat(item.batt_level));
                            existingItem.minLevel = Math.min(existingItem.minLevel, parseFloat(item.batt_level));
                        } else {
                            acc.push({ date: item.date, maxLevel: parseFloat(item.batt_level), minLevel: parseFloat(item.batt_level) });
                        }
                        return acc;
                    }, []);

                    byDayFilter.map(row => {
                        setMaxLevel(prevList => [...prevList, row.maxLevel]);
                        setMinLevel(prevList => [...prevList, row.minLevel]);
                        setLabel(prevList => [...prevList, row.date]);
                    });


                    break

                case 'year':
                    // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    // const levelByMonth = {};
                    // const countByMonth = {};

                    // for (let i = 0; i < sysData.length; i++) {
                    //     const dateParts = sysData[i].date.split(' ');
                    //     const monthIndex = monthNames.indexOf(dateParts[0]);
                    //     const year = dateParts[2];
                    //     const yearMonth = `${monthNames[monthIndex]}-${year}`;
                    //     const level = sysData[i].batt_level;

                    //     if (levelByMonth[yearMonth]) {
                    //         levelByMonth[yearMonth] += level;
                    //         countByMonth[yearMonth]++;
                    //     } else {
                    //         levelByMonth[yearMonth] = level;
                    //         countByMonth[yearMonth] = 1;
                    //     }
                    // }

                    // const resultArray = [];
                    // for (const yearMonth in levelByMonth) {
                    //     const [monthName, year] = yearMonth.split('-');
                    //     const month = monthNames.indexOf(monthName) + 1;
                    //     const level = levelByMonth[yearMonth] / countByMonth[yearMonth];
                    //     resultArray.push({ month: monthNames[month - 1], level: level });
                    // }

                    // resultArray.map(row => {
                    //     setLevel(prevList => [...prevList, row.level]);
                    //     setLabel(prevList => [...prevList, row.month]);
                    // });

                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    const levelsByMonth = {};
                    const countByMonth = {};
                    const sumMaxByMonth = {};
                    const sumMinByMonth = {};

                    for (let i = 0; i < sysData.length; i++) {
                        const dateParts = sysData[i].date.split(' ');
                        const monthIndex = monthNames.indexOf(dateParts[0]);
                        const year = dateParts[2];
                        const yearMonth = `${monthNames[monthIndex]}-${year}`;
                        const day = parseInt(dateParts[1]);
                        const level = parseFloat(sysData[i].batt_level);

                        if (!levelsByMonth[yearMonth]) {
                            levelsByMonth[yearMonth] = {};
                            countByMonth[yearMonth] = {};
                            sumMaxByMonth[yearMonth] = {};
                            sumMinByMonth[yearMonth] = {};
                        }

                        if (!levelsByMonth[yearMonth][day]) {
                            levelsByMonth[yearMonth][day] = [];
                            countByMonth[yearMonth][day] = 0;
                            sumMaxByMonth[yearMonth][day] = 0;
                            sumMinByMonth[yearMonth][day] = 0;
                        }

                        levelsByMonth[yearMonth][day].push(level);
                        countByMonth[yearMonth][day]++;
                        sumMaxByMonth[yearMonth][day] += level;
                        sumMinByMonth[yearMonth][day] += level;
                    }

                    const resultArray = [];
                    for (const yearMonth in levelsByMonth) {
                        const [monthName, year] = yearMonth.split('-');
                        const month = monthNames.indexOf(monthName) + 1;
                        const maxLevels = [];
                        const minLevels = [];

                        for (const day in levelsByMonth[yearMonth]) {
                            const maxLevel = Math.max(...levelsByMonth[yearMonth][day]);
                            const minLevel = Math.min(...levelsByMonth[yearMonth][day]);
                            maxLevels.push(maxLevel);
                            minLevels.push(minLevel);
                        }

                        const averageMaxLevel = maxLevels.reduce((acc, val) => acc + val, 0) / maxLevels.length;
                        const averageMinLevel = minLevels.reduce((acc, val) => acc + val, 0) / minLevels.length;

                        resultArray.push({ month: monthNames[month - 1], averageMaxLevel, averageMinLevel });
                    }

                    resultArray.map(row => {
                        setMaxLevel(prevList => [...prevList, row.averageMaxLevel]);
                        setMinLevel(prevList => [...prevList, row.averageMinLevel]);
                        setLabel(prevList => [...prevList, row.month]);
                    });

                    break;

                default:
                    return;
            }

        } catch {

        }
    }, [sysData, view])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },

        scales: view !== 'day' ? {
            x: {
                stacked: true,
            },
            y: {
                min: 0,
                max: 100,
            }
        }
            : {
                x: {
                    type: 'category',
                    ticks: {
                        maxRotation: 0,
                        autoSkipPadding: 50,
                    },
                },
                y2: {
                    type: 'linear',
                    position: 'left',
                    min: 0,
                    max: 100,
                },
                y1: {
                    type: 'linear',
                    offset: true,
                    position: 'right',
                    min: 0,
                    max: 1,
                    ticks: {
                        stepSize: 1,
                    }
                }
            },
        plugins: {
            legend: {
                position: 'bottom',
                display: true,
                labels: {
                    filter: function (legendItem, chartData) {
                        if (view !== 'day' && (legendItem.text === 'Lamp' || legendItem.text === 'Charging')) {
                            return false; // Hide Lamp and Charge legends when view is not 'day'
                        }
                        return true; // Display other legends
                    },
                },
            },
            title: {
                display: true,
                text: view === 'day' ? 'Battery Level, Charging & LED Status' : view === 'month' ? 'Battery Level' : 'Average Battery Level',
                font: {
                    size: 24,
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                zoom: {
                    pinch: {
                        enabled: true       // Enable pinch zooming
                    },
                    wheel: {
                        enabled: true       // Enable wheel zooming
                    },
                    mode: 'x',
                }
            },
            clip: {
                left: 25, // Adjust the number of initially visible data points
                right: 25, // Adjust the number of initially visible data points
            },
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: view !== 'day' ?
            [
                {
                    type: 'bar',
                    label: 'Maximum',
                    data: maxlevel,
                    backgroundColor: 'rgba(9, 15, 30, 0.5)',
                    borderColor: 'rgba(9, 15, 30, 1)',
                    yAxisID: 'y',
                    // fill: true
                },
                {
                    type: 'bar',
                    label: 'Minimum',
                    data: minlevel,
                    backgroundColor: 'rgba(28, 164, 63, 1)',
                    borderColor: 'rgba(28, 164, 63, 1)',
                    yAxisID: 'y',
                    // fill: true
                },
            ]
            : [
                {
                    type: 'line',
                    label: 'Lamp',
                    data: lamp,
                    backgroundColor: 'rgb(243, 156, 18, 0.8)',
                    borderColor: 'rgb(243, 156, 18, 0.8)',
                    yAxisID: 'y1',
                    stepped: true,
                    order: 1,
                },
                {
                    type: 'line',
                    label: 'Charging',
                    data: status,
                    backgroundColor: 'rgba(28, 164, 63, 0.8)',
                    borderColor: 'rgba(28, 164, 63, 0.8)',
                    yAxisID: 'y1',
                    stepped: true,
                    order: 1,
                },
                {
                    type: view === 'day' ? 'line' : 'bar',
                    label: 'Level (%)',
                    data: level,
                    backgroundColor: 'rgba(9, 15, 30, 0.8)',
                    borderColor: 'rgba(9, 15, 30, 0.8)',
                    yAxisID: 'y2',
                    order: 2,
                    fill: true
                },
            ],
    };

    return <Chart options={options} data={data} />;
};

export default BattLevelChart;