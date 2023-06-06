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
    ScatterController
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
    ScatterController,
    zoomPlugin
);


const ProductionChart = (props) => {
    const sysData = props.data;
    const view = props.viewMode;

    const [label, setLabel] = useState([]);
    const [generate, setGenerate] = useState([]);
    const [temp, setTemp] = useState([]);
    const [light, setLight] = useState([]);

    useEffect(() => {
        try {
            setLabel([]);
            setGenerate([]);
            setTemp([]);
            setLight([]);

            switch (view) {
                case 'all':
                    const uniqueLabels = Array.from(new Set(sysData.map(row => row.time)));

                    // Sort the unique labels in a 24-hour format
                    uniqueLabels.sort((a, b) => {
                        const timeA = new Date(`1970-01-01T${a}`);
                        const timeB = new Date(`1970-01-01T${b}`);
                        return timeA.getTime() - timeB.getTime();
                    });

                    // Use the filtered and sorted labels to populate the state variables
                    uniqueLabels.forEach(label => {
                        const matchingRow = sysData.find(row => row.time === label);
                        if (matchingRow) {
                            setLabel(prevList => [...prevList, label]);
                            setGenerate(prevList => [...prevList, matchingRow.pv_power]);
                            setTemp(prevList => [...prevList, matchingRow.temp]);
                            setLight(prevList => [...prevList, matchingRow.lux]);
                        }
                    });

                    break;

                case 'day':
                    sysData.map(row => {
                        setLabel(prevList => [...prevList, row.time]);
                        setGenerate(prevList => [...prevList, row.pv_power]);
                        setTemp(prevList => [...prevList, row.temp]);
                        setLight(prevList => [...prevList, row.lux]);
                    });

                    break;

                case 'month':
                    const byMonthFilter = sysData.reduce((acc, item) => {
                        const existingItem = acc.find((el) => el.date === item.date);
                        if (existingItem) {
                            existingItem.sys_power += parseFloat(item.pv_power) * 0.08333;
                            existingItem.sys_temp += parseFloat(item.temp);
                            existingItem.sys_lux += parseFloat(item.lux);
                            existingItem.count += 1;
                        } else {
                            acc.push({ date: item.date, sys_power: item.pv_power * 0.08333, sys_temp: item.temp, sys_lux: item.lux, count: 1 });
                        }
                        return acc;
                    }, []);

                    byMonthFilter.map(row => {
                        setLabel(prevList => [...prevList, row.date]);
                        setGenerate(prevList => [...prevList, row.sys_power]);
                        setTemp(prevList => [...prevList, row.sys_temp / row.count]);
                        setLight(prevList => [...prevList, row.sys_lux / row.count]);
                    });

                    break

                case 'year':
                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    const genByMonth = {};
                    const tempByMonth = {};
                    const luxByMonth = {};
                    const countByMonth = {};

                    for (let i = 0; i < sysData.length; i++) {
                        const dateParts = sysData[i].date.split(' ');
                        const monthIndex = monthNames.indexOf(dateParts[0]);
                        const year = dateParts[2];
                        const yearMonth = `${monthNames[monthIndex]}-${year}`;
                        const generate = sysData[i].pv_power;
                        const temp = sysData[i].temp;
                        const light = sysData[i].lux;

                        if (genByMonth[yearMonth]) {
                            genByMonth[yearMonth] += generate;
                            tempByMonth[yearMonth] += temp;
                            luxByMonth[yearMonth] += light;
                            countByMonth[yearMonth]++;
                        } else {
                            genByMonth[yearMonth] = generate;
                            tempByMonth[yearMonth] = temp;
                            luxByMonth[yearMonth] = light;
                            countByMonth[yearMonth] = 1;
                        }
                    }

                    const resultArray = [];
                    for (const yearMonth in genByMonth) {
                        const [monthName, year] = yearMonth.split('-');
                        const month = monthNames.indexOf(monthName) + 1;
                        const generate = genByMonth[yearMonth] * 0.08333;
                        const temp = tempByMonth[yearMonth] / countByMonth[yearMonth];
                        const light = luxByMonth[yearMonth] / countByMonth[yearMonth];
                        resultArray.push({ month: monthNames[month - 1], generate: generate, temp: temp, lux: light });
                    }

                    resultArray.map(row => {
                        setGenerate(prevList => [...prevList, row.generate]);
                        setTemp(prevList => [...prevList, row.temp]);
                        setLight(prevList => [...prevList, row.lux]);
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
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: view === 'day' ? "Solar PV Panel Output" : "Average Solar PV Panel Output",
                font: {
                    size: 24,
                }
            },
            // zoom: {
            //     pan: {
            //         enabled: true,
            //         mode: 'x'
            //     },
            //     zoom: {
            //         pinch: {
            //             enabled: true       // Enable pinch zooming
            //         },
            //         wheel: {
            //             enabled: true       // Enable wheel zooming
            //         },
            //         mode: 'x',
            //     }
            // }
        },
        scales: {
            x: {
                type: 'category',
                ticks: {
                    maxRotation: 0,
                    autoSkipPadding: 50,
                },
            },
            y: {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                position: 'right',
            },
            y1: {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                position: 'left',
            },
        }
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                // fill: true,
                type: view === 'all' ? 'scatter' : 'line',
                label: 'Temperature (°C)',
                backgroundColor: 'rgb(4, 59, 92, 1)',
                data: view === 'all' ? sysData.map(point => ({
                    x: point.time,
                    y: point.temp
                })) : temp,
                borderColor: 'rgb(4, 59, 92, 1)',
                yAxisID: 'y1',
                pointRadius: view !== 'all' ? 0 : 3,  
            },
            {
                // fill: true,
                type: view === 'all' ? 'scatter' : 'line',
                label: 'Ambient Light (lux)',
                backgroundColor: 'rgb(22, 160, 133, 1)',
                data: view === 'all' ? sysData.map(point => ({
                    x: point.time,
                    y: point.lux
                })) : light,
                borderColor: 'rgb(22, 160, 133, 1)',
                yAxisID: 'y',
                pointRadius: view !== 'all' ? 0 : 3,  
            },
            {
                // fill: true,
                type: view === 'all' ? 'scatter' : view === 'day' ? 'line' : 'bar',
                label: view === 'day' ? 'Power (W)' : 'Energy (Wh)',
                data: view === 'all' ? sysData.map(point => ({
                    x: point.time,
                    y: point.pv_power
                })) : generate,
                backgroundColor: 'rgb(207, 0, 15, 1)',
                borderColor: 'rgb(207, 0, 15, 1)',
                yAxisID: 'y1',
                pointRadius: view !== 'all' ? 0 : 3,  
            },
        ],
    };

    return <Chart options={options} data={data} />;
};

export default ProductionChart;