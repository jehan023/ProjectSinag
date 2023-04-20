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

    useEffect(() => {
        try {
            setLabel([]);
            setLevel([]);

            switch (view) {
                case 'day':
                    sysData.map(row => {
                        setLevel(prevList => [...prevList, row.batt_level]);
                        setLabel(prevList => [...prevList, row.time]);
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
                        setLevel(prevList => [...prevList, row.batt_level]);
                        setLabel(prevList => [...prevList, row.date]);
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
                display: false,
            },
            title: {
                display: true,
                text: 'Battery Level',
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
                type: 'bar',
                label: 'Charging',
                data: level,
                backgroundColor: 'rgba(22, 160, 133, 0.5)',
                borderColor: 'rgba(22, 160, 133, 1)',
            },
        ],
    };

    return <Chart options={options} data={data} />;
};

export default BattLevelChart;