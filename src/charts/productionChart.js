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


const ProductionChart = (props) => {
    const sysData = props.data;
    const view = props.viewMode;

    // console.table(sysData);

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
                            existingItem.sys_power += parseFloat(item.pv_power) * 0.16667;
                            existingItem.sys_temp += parseFloat(item.temp);
                            existingItem.sys_lux += parseFloat(item.lux);
                            existingItem.count += 1;
                        } else {
                            acc.push({ date: item.date, sys_power: item.pv_power * 0.16667, sys_temp: item.temp, sys_lux: item.lux, count: 1 });
                        }
                        return acc;
                    }, []);

                    byMonthFilter.map(row => {
                        setLabel(prevList => [...prevList, row.date]);
                        setGenerate(prevList => [...prevList, row.sys_power]);
                        setTemp(prevList => [...prevList, row.sys_temp/row.count]);
                        setLight(prevList => [...prevList, row.sys_lux/row.count]);
                    });
                    console.table(byMonthFilter);

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
                        const generate = genByMonth[yearMonth] / countByMonth[yearMonth];
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
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Energy Production',
                font: {
                    size: 24,
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                // zoom: {
                //     pinch: {
                //         enabled: true       // Enable pinch zooming
                //     },
                //     wheel: {
                //         enabled: true       // Enable wheel zooming
                //     },
                //     mode: 'x',
                // }
            }
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                // fill: true,
                type: 'line',
                label: 'Temperature (°C)',
                backgroundColor: 'rgb(4, 59, 92, 1)',
                data: temp,
                borderColor: 'rgb(4, 59, 92, 1)',
            },
            {
                // fill: true,
                type: 'line',
                label: 'Ambient Light (Lux)',
                backgroundColor: 'rgb(22, 160, 133, 1)',
                data: light,
                borderColor: 'rgb(22, 160, 133, 1)',
            },
            {
                // fill: true,
                type: 'line',
                label: 'Generation (Wh)',
                data: generate,
                backgroundColor: 'rgb(207, 0, 15, 1)',
                borderColor: 'rgb(207, 0, 15, 1)',
            },
        ],
    };

    return <Chart options={options} data={data} />;
};

export default ProductionChart;