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

    console.table(sysData);

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
                    // const byMonthFilter = sysData.reduce((acc, item) => {
                    //     const existingItem = acc.find((el) => el.date === item.date);
                    //     if (existingItem) {
                    //         existingItem.sys_value += parseFloat(item.pv_power);
                    //         existingItem.cons_value += parseFloat(item.pv_power);
                    //     } else {
                    //         acc.push({ date: item.date, sys_value: item.pv_power, cons_value: item.pv_power });
                    //     }
                    //     return acc;
                    // }, []);

                    // byMonthFilter.map(row => {
                    //     setLevel(prevList => [...prevList, row.sys_value]);
                    //     setLabel(prevList => [...prevList, row.date]);
                    // });

                    sysData.map(row => {
                        setLabel(prevList => [...prevList, row.time]);
                        setGenerate(prevList => [...prevList, row.pv_power]);
                        setTemp(prevList => [...prevList, row.temp]);
                        setLight(prevList => [...prevList, row.lux]);
                    });

                    break

                case 'year':
                    return;

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
                position: 'right'
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
                zoom: {
                    pinch: {
                        enabled: true       // Enable pinch zooming
                    },
                    wheel: {
                        enabled: true       // Enable wheel zooming
                    },
                    mode: 'x',
                }
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
                type: 'bar',
                label: 'Generation (Wh)',
                data: generate,
                backgroundColor: 'rgb(207, 0, 15, 0.6)',
                borderColor: 'rgb(207, 0, 15, 1)',
            },
        ],
    };

    return <Chart options={options} data={data} />;
};

export default ProductionChart;